import { BikeRentalStation } from "../types/bikeRentalStation";

export const BikeStationCard = ({
  name,
  stationId,
  bikesAvailable,
  capacity,
}: Omit<BikeRentalStation, "lon" | "lat" | "state" | "realtime">) => {
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
}: Omit<BikeRentalStation, "lon" | "lat" | "state" | "realtime">) => {
  const availabilityPercentage = bikesAvailable / capacity;

  return (
    <div className="flex w-[480px] flex-col space-y-4 rounded-2xl bg-white px-6 pt-6 pb-6 drop-shadow-md">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row space-x-4">
          <div className="h-16 w-16 flex-shrink-0 rounded-lg bg-hsl-yellow" />
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">{name}</h1>
            <p className="text-s font-light">Bike station {stationId}</p>
          </div>
        </div>
        <div className="flex flex-row items-baseline gap-2 py-4">
          <div className="text-3xl font-semibold ">{bikesAvailable}</div>
          <div className="text-3xl">/</div>
          <div className="text-3xl">{capacity}</div>
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
