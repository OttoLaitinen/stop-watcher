"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useGetBikeRentalStationsByIds } from "../clientSideDataFetching/bikeRentalStations";
import useStore from "../util/store";
import { SmallBikeStationCard } from "./BikeStationCard";

const CARD_CHANGE_TIMEOUT_MS = 8000;

const CardWindow = (): JSX.Element | null => {
  const fetchedStationIds = useStore((state) => state.fetchedStationIds);

  const { data: bikeStations, error } =
    useGetBikeRentalStationsByIds(fetchedStationIds);

  const [displayedCardIndex, setDisplayedCardIndex] = useState(0);

  useEffect(() => {
    const changeCard = () => {
      setDisplayedCardIndex((current) => {
        if (bikeStations && current < bikeStations.length - 1) {
          return current + 1;
        }
        return 0;
      });
    };
    const cardChangeInterval = setInterval(() => {
      changeCard();
    }, CARD_CHANGE_TIMEOUT_MS);
    return () => clearInterval(cardChangeInterval);
  }, [bikeStations, bikeStations?.length]);

  if (error) return null;

  if (!bikeStations)
    return (
      <div className="relative z-50 flex h-[320px] w-[560px] flex-row items-center justify-center overflow-hidden rounded-2xl bg-gray-300 shadow-inner-md" />
    );

  return (
    <div className="relative z-50 flex h-[320px] w-[560px] flex-row items-center justify-center overflow-hidden rounded-2xl bg-hsl-yellow shadow-inner-md">
      <AnimatePresence initial={false}>
        <motion.div
          key={displayedCardIndex}
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={{ duration: 1 }}
          className="absolute"
        >
          <SmallBikeStationCard
            stationId={bikeStations[displayedCardIndex].stationId}
            name={bikeStations[displayedCardIndex].name}
            bikesAvailable={bikeStations[displayedCardIndex].bikesAvailable}
            capacity={bikeStations[displayedCardIndex].capacity}
            state={bikeStations[displayedCardIndex].state}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const variants = {
  enter: {
    y: -1000,
    opacity: 0,
  },
  center: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  exit: {
    x: 1000,
    opacity: 0,
  },
};

export default CardWindow;
