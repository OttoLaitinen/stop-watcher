import type { Metadata } from "next";

import Link from "next/link";
import CardWindow from "./components/CardWindow";

export const metadata: Metadata = {
  title: "Bike Watch",
  description:
    "Dashboard for showing the live status of city bike stations in the Helsinki Metropolitan area. By Otto A. Laitinen.",
};

const LandingPage = () => {
  return (
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
          <CardWindow />
          <div className="flex flex-col gap-2 font-rale text-xl">
            <h2 className="font-semibold">Customisable</h2>
            <p className="w-[560px] max-w-prose">
              Check the status of your closest stations on the go or customise
              the dashboard to show you only the stations you want.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="rounded-full bg-hsl-yellow py-4 px-6 text-xl font-semibold"
          >
            Open Dashboard
          </Link>
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
