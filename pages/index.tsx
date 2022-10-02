import type { NextPage } from "next";
import { request } from "graphql-request";

import Head from "next/head";
import useSWR from "swr";
import useStore from "../util/store";
import { useState } from "react";
import { SmallBikeStationCard } from "../components/BikeStationCard";
import { BikeRentalStation } from "../types/bikeRentalStation";
import CardWindow from "../components/CardWindow";
import Link from "next/link";

const Index: NextPage = () => {
  const currentStationId = useStore((state) => state.currentStationId);
  const changeCurrentStation = useStore((state) => state.changeCurrentStation);

  const [newStationId, setNewStationId] = useState("");

  const { data, error } = useSWR<BikeRentalStation>(
    [
      `query Stations($stationId: String!) {
          bikeRentalStation(id: $stationId) {
            name
            stationId
            bikesAvailable
            capacity
            state
            realtime
            lon
            lat
          }
    }`,
      { stationId: currentStationId },
    ],
    bikeStationFetcher,
    { refreshInterval: 30 * 1000 }
  );

  return (
    <>
      <Head>
        <title>Bike Watch</title>
        <meta
          name="description"
          content={`Dashboard for showing the live status of city bike stations in the Helsinki Metropolitan area. By Otto A. Laitinen.`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-full flex-col items-center justify-center">
        <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2">
          <div className="flex h-full flex-col items-start justify-center gap-4 p-12 font-rale">
            <h1 className="text-9xl font-semibold">Bike Watch</h1>
            <p className="max-w-prose text-2xl font-light">
              A web app to check how your closest city Helsinki region bike
              station is doing. Designed to be used as dashboard.
            </p>
            <p className="max-w-prose justify-self-end text-2xl font-light">
              A hobby project by <a href="https://oal.fi">Otto A. Laitinen</a>
            </p>
          </div>
          <div className="flex h-full flex-col items-center justify-center gap-10 bg-white ">
            {data && (
              <CardWindow>
                <SmallBikeStationCard
                  name={data.name}
                  stationId={data.stationId}
                  bikesAvailable={data.bikesAvailable}
                  capacity={data.capacity}
                />
              </CardWindow>
            )}
            <div className="flex flex-col gap-2 font-rale text-xl">
              <h2 className="font-semibold">Customisable</h2>
              <p className="w-[560px] max-w-prose">
                Check the status of your closest stations on the go or customise
                the dashboard to show you only the stations you want.
              </p>
            </div>
            <Link href="/dashboard">
              <a className="rounded-full bg-hsl-yellow py-4 px-6 text-xl font-bold">
                Open Dashboard
              </a>
            </Link>
            <div></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;

const bikeStationFetcher = async (
  query: string,
  variables?: { stationId: string }
): Promise<BikeRentalStation> => {
  const answer = await request(
    "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
    query,
    variables
  );

  return answer?.bikeRentalStation;
};
