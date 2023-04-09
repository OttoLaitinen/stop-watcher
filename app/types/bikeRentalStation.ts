export interface BikeRentalStation {
  name: string;
  stationId: string;
  bikesAvailable: number;
  capacity: number;
  state: string;
  realtime: boolean;
  lon: number;
  lat: number;
}
