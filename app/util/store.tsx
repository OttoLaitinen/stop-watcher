import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface StationState {
  fetchedStationIds: string[];
  resetFetchedStationIds: () => void;
  setFetchedStationIds: (to: string[]) => void;
  currentStationId: string;
  changeCurrentStation: (to: string) => void;
}

const defaultFetchedStationIds = ["547", "541", "543"];

const useStore = create<StationState>()(
  devtools(
    persist((set) => ({
      fetchedStationIds: defaultFetchedStationIds,
      resetFetchedStationIds: () =>
        set({ fetchedStationIds: defaultFetchedStationIds }),
      setFetchedStationIds: (to) => set({ fetchedStationIds: to }),
      currentStationId: "547",
      changeCurrentStation: (to) => set({ currentStationId: to }),
    }))
  )
);

export default useStore;
