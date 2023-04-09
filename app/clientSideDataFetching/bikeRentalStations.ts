import useSWR from "swr";
import { BikeRentalStation } from "../types/bikeRentalStation";
import { client } from "../util/graphqlClient";

export const useGetBikeRentalStationsByIds = (stationIds: string[]) => {
  const bikeStationFetcher = async (
    query: string,
    variables?: { stationId: string }
  ): Promise<BikeRentalStation[] | undefined> => {
    try {
      const answer = await client.request(query, variables);
      return answer?.bikeRentalStations.filter(
        (station: BikeRentalStation | null | undefined) => station !== null
      );
    } catch (e) {
      console.error(e);
    }
  };

  return useSWR<BikeRentalStation[] | undefined>(
    [
      `query Stations($stationIds: [String]!) {
                  bikeRentalStations(ids: $stationIds) {
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
      { stationIds },
    ],
    bikeStationFetcher,
    { refreshInterval: 30 * 1000 }
  );
};
