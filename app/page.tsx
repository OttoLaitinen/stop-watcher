import { Metadata } from "next";
import LandingPage from "./landingPage";

export const metadata: Metadata = {
  title: "Bike Watch",
  description:
    "Dashboard for showing the live status of city bike stations in the Helsinki Metropolitan area. By Otto A. Laitinen.",
};

const Page = () => {
  return <LandingPage />;
};

export default Page;
