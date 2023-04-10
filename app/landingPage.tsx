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
    <main className="pt-8 pb-16">
      <div className="grid max-h-fit w-full max-w-[1800px] grid-cols-1 flex-col items-center justify-start gap-y-8 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center px-6">
          <div className="flex max-w-[560px]  flex-col items-start justify-center gap-4  font-rale">
            <h1 className="text-5xl font-semibold">Bike Watch</h1>
            <p className=" text-base font-light">
              A web app to check how your closest Helsinki region city bike
              station is doing. Designed to be used as dashboard.
            </p>
            <p className="justify-self-end text-base font-light">
              A hobby project by{" "}
              <a className="underline" href="https://oal.fi">
                Otto A. Laitinen
              </a>
            </p>
          </div>
        </div>
        <div className="flex  flex-col items-center justify-start gap-y-8">
          <CardWindow />
          <div className="flex flex-col gap-y-8 px-6">
            <div className="flex flex-col gap-2 font-rale text-base">
              <h2 className="font-semibold">Customisable</h2>
              <p className="max-w-[560px]">
                Check the status of your closest stations on the go or customise
                the dashboard to show you only the stations you want.
              </p>
            </div>
            <Link
              href="/dashboard"
              className="w-full items-center justify-center rounded-full bg-hsl-yellow py-4 px-6 text-center text-lg font-semibold"
            >
              Open Dashboard
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
