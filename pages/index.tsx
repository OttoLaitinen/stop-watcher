import type { NextPage } from "next";
import { request } from "graphql-request";

import Head from "next/head";
import useSWR from "swr";
import useStore from "../util/store";
import { useState } from "react";

const fetcher = (query: string, variables?: { stationId: string }) =>
  request(
    "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
    query,
    variables
  );

const Dashboard: NextPage = () => {
  const currentStationId = useStore((state) => state.currentStationId);
  const changeCurrentStation = useStore((state) => state.changeCurrentStation);

  const [newStationId, setNewStationId] = useState("");

  const { data, error } = useSWR(
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
    fetcher,
    { refreshInterval: 30 * 1000 }
  );

  const station = data?.bikeRentalStation;
  const availabilityPercentage = station?.bikesAvailable / station?.capacity;

  return (
    <>
      <Head>
        <title>{station?.name} City Bike Station</title>
        <meta
          name="description"
          content={`Shows the status of ${station?.name} City Bike Station`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center h-full">
        <div className="grid grid-cols-2 h-full w-full">
          <div className="flex flex-col justify-center items-start h-full p-12 space-y-2">
            <h1 className="text-8xl font-semibold">Bike Watch</h1>
            <p className="text-2xl font-light max-w-prose">
              A web app to check how your closest city Helsinki region bike
              station is doing. Designed to be used as dashboard.
            </p>
            <p className="justify-self-end font-light text-2xl max-w-prose">
              A hobby project by Otto A. Laitinen
            </p>
          </div>
          <div className="flex flex-col justify-center items-center h-full bg-yellow-500 ">
            <div className="flex flex-col bg-white p-8 rounded-2xl space-y-4 min-w-[600px]">
              <div className="flex flex-row space-x-4">
                <div className="bg-yellow-500 rounded-lg h-20 w-20" />
                <div className="flex flex-col">
                  <h1 className="text-4xl">{station?.name}</h1>
                  <p className="text-base font-light">
                    Bike station {station?.stationId}
                  </p>
                </div>
              </div>
              <div className="flex flex-row space-x-3 align-start py-4">
                <div className="text-8xl font-semibold ">
                  {station?.bikesAvailable}
                </div>
                <div className="text-8xl">/</div>
                <div className="text-8xl">{station?.capacity}</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-6">
                <div
                  className="bg-green-600 h-6 rounded-full"
                  style={{
                    width: `${availabilityPercentage * 100}%`,
                  }}
                ></div>
              </div>
              <button className="text-zinc-600 text-lg font-semibold hover:text-opacity-75">
                Change station
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
