import React, { useState } from "react";

interface daysProps {
  timeTillDate: string;
  timeFormat: string;
}

export const useDaysCount = (timeTillDate: string, timeFormat: string) => {
  const timeDiffCalc = () => {
    const dateFuture: any = new Date(timeTillDate);
    const dateNow: any = new Date();
    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;

    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;

    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;

    const seconds = Math.floor(diffInMilliSeconds) % 60;
    diffInMilliSeconds -= seconds * 60;

    return { days, hours, minutes,seconds};
  };
  const [counterData, setCounterData] = useState(timeDiffCalc());
  setTimeout(() => {
    setCounterData(timeDiffCalc());
  }, 10000);
  return [counterData];
};
