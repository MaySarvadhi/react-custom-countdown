import { SvgCircle } from "../SvgCircle/SvgCircle";
import React, { useEffect, useState } from "react";
import { useDaysCount } from "../hooks/daysCount";
import "./counter.css";

interface CountdownProps {
  timeTillDate: string;
  timeFormat: string;
}

export const Countdown: React.FC<CountdownProps> = ({
  timeTillDate,
  timeFormat,
}) => {
  const counterData = useDaysCount(timeTillDate, timeFormat);
  const [days, setDays] = useState(counterData[0].days);
  const [hours, setHours] = useState(counterData[0].hours);
  const [minutes, setMinutes] = useState(counterData[0].minutes);
  const [seconds, setSeconds] = useState(counterData[0].seconds);
  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState("#ed004f");

  useEffect(() => {
    setDays(counterData[0].days);
    setHours(counterData[0].hours);
    setMinutes(counterData[0].minutes);
    setSeconds(counterData[0].seconds);
  }, [counterData, timeTillDate, seconds]);

  return (
    <div>
      <span className="fa-stack fa-2x">
        <i className="fas fa-circle fa-stack-2x"></i>
        <i className="fas fa-rocket fa-stack-1x fa-inverse"></i>
      </span>
      <div className="countdown-wrapper">
        <div className="countdown-item">
          <SvgCircle
            title="days"
            size={100}
            progress={days}
            strokeWidth={5}
            circleOneStroke="#7ea9e1"
            circleTwoStroke={color}
            defaultValue={365}
            extraData={seconds}
          />
          {days}
          <span>days</span>
        </div>
        <div className="countdown-item">
          <SvgCircle
            title="hours"
            size={100}
            progress={hours}
            strokeWidth={5}
            circleOneStroke="#7ea9e1"
            circleTwoStroke={color}
            defaultValue={24}
            extraData={seconds}
          />
          {hours}
          <span>hours</span>
        </div>
        <div className="countdown-item">
          <SvgCircle
            title="minutes"
            size={100}
            progress={minutes}
            strokeWidth={5}
            circleOneStroke="#7ea9e1"
            circleTwoStroke={color}
            defaultValue={60}
            extraData={seconds}
          />
          {minutes}
          <span>minutes</span>
        </div>
        {seconds && seconds > 0 ? (
          <div className="countdown-item">
            <SvgCircle
              size={100}
              progress={seconds}
              strokeWidth={5}
              circleOneStroke="#7ea9e1"
              circleTwoStroke={color}
              defaultValue={60}
              extraData={seconds}
            />
            {seconds}
            <span>seconds</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};
