export const parseStationState = (stationState: string) => {
  switch (stationState) {
    case "Station on":
      return "on";
    case "Station off":
      return "off";
    default:
      return "unknown";
  }
};
