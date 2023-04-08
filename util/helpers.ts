export const parseStationState = (stationState) => {
  switch (stationState) {
    case "Station on":
      return "on";
    case "Station off":
      return "off";
    default:
      return "unknown";
  }
};
