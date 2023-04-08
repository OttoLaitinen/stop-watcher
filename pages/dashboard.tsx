import { NextPage } from "next";
import Head from "next/head";

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bike Watch Dashboard</title>
        <meta
          name="description"
          content={`Dashboard for showing the live status of city bike stations in the Helsinki Metropolitan area. By Otto A. Laitinen.`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>Still very much WIP :D </div>
      </main>
    </>
  );
};

export default Dashboard;
