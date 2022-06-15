import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface StationState {
  currentStationId: string;
}

const useStore = create<StationState>()(
  devtools(
    persist((set) => ({
      currentStationId: "547",
    }))
  )
);

export default useStore;
