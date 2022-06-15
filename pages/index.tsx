import type { NextPage } from "next";
import { request } from "graphql-request";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useSWR from "swr";

const fetcher = (query: string) =>
  request(
    "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
    query
  );

const Home: NextPage = () => {
  const { data, error } = useSWR(
    `query Stations {
      bikeRentalStation(id: "543") {
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
