import type { NextPage } from "next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage<{ station: any; data: any }> = ({ station, data }) => {
  console.log("THE STATION: ", station);
  console.log("DATA: ", data);
  return (
    <div className={styles.container}>
      <Head>
        <title>{station.name} City Bike Station</title>
        <meta
          name="description"
          content={`Shows the status of ${station.name} City Bike Station`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {station.name} <a href="https://www.hsl.fi/en/citybikes">City Bike</a>{" "}
          Station
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>
              {station.name} ({station.stationId})
            </h2>
            <h3>Availability</h3>
            <p>
              {station.bikesAvailable} / {station.capacity}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query Stations {
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
      }
    `,
  });

  return {
    props: {
      station: data.bikeRentalStation,
    },
  };
}

export default Home;
