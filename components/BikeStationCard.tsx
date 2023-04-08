import Image from "next/image";
import { BikeRentalStation } from "../types/bikeRentalStation";
import { parseStationState } from "../util/helpers";
import bikeIcon from "../public/icons/bike.svg";

export const BikeStationCard = ({
  name,
  stationId,
  bikesAvailable,
  capacity,
  state,
}: Omit<BikeRentalStation, "lon" | "lat" | "realtime">) => {
  const availabilityPercentage = bikesAvailable / capacity;

  return (
    <div className="flex w-[600px] flex-col space-y-4 rounded-2xl bg-white px-8 pt-8 pb-4 drop-shadow-md">
      <div className="flex flex-row space-x-4">
        <div className="h-20 w-20 flex-shrink-0 rounded-lg bg-hsl-yellow" />
        <div className="flex flex-col">
          <h1 className="text-4xl">{name}</h1>
          <p className="text-base font-light">Bike station {stationId}</p>
        </div>
      </div>
      <div className="flex flex-row items-baseline gap-7 py-4">
        <div className="text-8xl font-semibold ">{bikesAvailable}</div>
        <div className="text-8xl">/</div>
        <div className="text-8xl">{capacity}</div>
      </div>
      <div className="h-6 w-full rounded-full bg-gray-200">
        <div
          className="h-6 rounded-full bg-hsl-lightGreen"
          style={{
            width: `${availabilityPercentage * 100}%`,
          }}
        ></div>
      </div>
      <button className="text-xl font-semibold text-hsl-lightGrey-text hover:text-opacity-75">
        Change station
      </button>
    </div>
  );
};

export const SmallBikeStationCard = ({
  name,
  stationId,
  bikesAvailable,
  capacity,
  state,
}: Omit<BikeRentalStation, "lon" | "lat" | "realtime">) => {
  const availabilityPercentage = bikesAvailable / capacity;

  return (
    <div
      key={stationId}
      className="flex w-[480px] flex-col space-y-4 rounded-2xl bg-white px-6 pt-5 pb-5 drop-shadow-md"
    >
      <div className="absolute top-2 right-2">
        <BikeStationStatePill stationState={state} />
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row justify-center space-x-4">
          <BikeAvatar />
          <div className="flex flex-col justify-center">
            <h1 className="p-0 text-xl font-semibold">{name}</h1>
          </div>
        </div>
        <div className="flex flex-row items-baseline gap-2 py-4">
          <div className="text-4xl font-semibold ">{bikesAvailable}</div>
          <div className="text-4xl">/</div>
          <div className="text-4xl">{capacity}</div>
        </div>
      </div>

      <div className="h-3 w-full rounded-full bg-gray-200">
        <div
          className="h-3 rounded-full bg-hsl-lightGreen"
          style={{
            width: `${availabilityPercentage * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

const BikeAvatar = () => {
  return (
    <div
      className="h-16 w-16 flex-shrink-0 rounded-lg bg-hsl-yellow p-1"
      aria-hidden
    >
      <Image src={bikeIcon} alt="Bicycle icon" />
    </div>
  );
};

const BikeStationStatePill = ({ stationState }: { stationState: string }) => {
  const parsedState = parseStationState(stationState);

  const PillText = ({ children }: { children: string }) => (
    <span className="text-xs font-semibold text-white">{children}</span>
  );

  if (parsedState === "on") {
    return (
      <div className="flex w-fit items-center justify-center rounded-2xl bg-hsl-lightGreen px-2 py-1">
        <PillText>Online</PillText>
      </div>
    );
  }

  if (parsedState === "off") {
    return (
      <div className="flex w-fit items-center justify-center rounded-2xl bg-hsl-warningRed px-2">
        <PillText>Offline</PillText>
      </div>
    );
  }

  return (
    <div className="flex w-fit items-center justify-center rounded-2xl bg-hsl-middleGrey px-2">
      <PillText>Station status unknown</PillText>
    </div>
  );
};
