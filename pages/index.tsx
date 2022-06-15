import type { NextPage } from "next";
import { request } from "graphql-request";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
import useStore from "../util/store";

const fetcher = (query: string, variables?: { stationId: string }) =>
  request(
    "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
    query,
    variables
  );

const Home: NextPage = () => {
  const currentStationId = useStore((state) => state.currentStationId);
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

  return (
    <div className={styles.container}>
      <Head>
        <title>{station?.name} City Bike Station</title>
        <meta
          name="description"
          content={`Shows the status of ${station?.name} City Bike Station`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {station?.name}{" "}
          <a href="https://www.hsl.fi/en/citybikes">City Bike</a> Station
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>
              {station?.name} ({station?.stationId})
            </h2>
            <h3>Availability</h3>
            <p>
              {station?.bikesAvailable} / {station?.capacity}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
