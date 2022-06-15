import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface StationState {
  currentStationId: string;
  changeCurrentStation: (to: string) => void;
}

const useStore = create<StationState>()(
  devtools(
    persist((set) => ({
      currentStationId: "547",
      changeCurrentStation: (to) => set((state) => ({ currentStationId: to })),
    }))
  )
);

export default useStore;
