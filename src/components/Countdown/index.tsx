import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface Props{
  startTime: number
  endTime: number
  today: number
}

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};

const renderTime = (time: number) => {
  return (
    <div className="time-wrapper">
      <div className="text-6xl">{time}</div>
      {/* <div>{dimens/ion}</div> */}
    </div>
  );
};

const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time: number) =>
  ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time: number) => (time / daySeconds) | 0;

export default function App(props: Props) {
  const {startTime, endTime, today} = props

  const remainingSecondsFromStart = endTime - startTime; //* Seconds of days between START and end time (the whole circle)
  // const days = Math.ceil(remainingSecondsFromStart / daySeconds); //* Convert to remaining days between START and end time
  // const daysDurationFromStart = days * daySeconds; //* Convert to remaining seconds of days between START and end time

  const remainingSecondsFromToday = endTime - today;  //* Seconds of days between TODAY and end time (the red area on circle)



  return (
    <div className="App w-2/3 space-x-10 z-20">
      <div className="flex flex-col space-y-6 ">
        <div className="absolute">
          <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="daysGradient" gradientTransform="rotate(90)">
                <stop offset="7%" stop-color="#ff7777" />
                <stop offset="48%" stop-color="#ff4848" />
                <stop offset="75%" stop-color="#ef323a" />
              </linearGradient>
            </defs>

            <circle cx="5" cy="5" r="4" fill="url('#daysGradient')" />
          </svg>
        </div>
        <CountdownCircleTimer
          {...timerProps}
          colors="url(#daysGradient)"
          //   colors={["#f9b234", "#fd701e", "#ff5a24"]}
          //   colorsTime={[50, 40, 0]}
          trailStrokeWidth={1}
          size={220}
          strokeWidth={15}
          duration={remainingSecondsFromStart} //* Seconds of days between START and end time
          initialRemainingTime={remainingSecondsFromToday}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingSecondsFromToday - totalElapsedTime > 0,
          })}
        >
          {({ elapsedTime, color }) => ( //* elapsedTime: Time has passed in second
            <span style={{ color: "#fff" }} className="text-lg">
              {renderTime(getTimeDays(remainingSecondsFromStart - elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>
        <div className="text-white text-4xl">DAYS</div>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="absolute">
          <svg viewBox="0 0 10 10">
            <defs>
              <linearGradient id="hoursGradient" gradientTransform="rotate(90)">
                <stop offset="7%" stop-color="#ff7777" />
                <stop offset="48%" stop-color="#ff4848" />
                <stop offset="75%" stop-color="#ef323a" />
              </linearGradient>
            </defs>

            <circle cx="5" cy="5" r="4" fill="url('#hoursGradient')" />
          </svg>
        </div>
        <CountdownCircleTimer
          {...timerProps}
          colors="url(#hoursGradient)"
          trailStrokeWidth={1}
          strokeWidth={15}
          size={220}
          duration={daySeconds}
          initialRemainingTime={remainingSecondsFromToday % daySeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingSecondsFromToday - totalElapsedTime > hourSeconds,
          })}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color: "#fff" }} className="text-lg">
              {renderTime(getTimeHours(daySeconds - elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>
        <div className="text-white text-4xl">HOURS</div>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="absolute">
          <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient
                id="minutesGradient"
                gradientTransform="rotate(90)"
              >
                <stop offset="7%" stop-color="#ff7777" />
                <stop offset="48%" stop-color="#ff4848" />
                <stop offset="75%" stop-color="#ef323a" />
              </linearGradient>
            </defs>

            <circle cx="5" cy="5" r="4" fill="url('#minutesGradient')" />
          </svg>
        </div>
        <CountdownCircleTimer
          {...timerProps}
          colors="url(#minutesGradient)"
          //   colors={["#f9b234", "#fd701e", "#ff5a24"]}
          //   colorsTime={[50, 40, 0]}
          trailStrokeWidth={1}
          strokeWidth={15}
          size={220}
          duration={hourSeconds}
          initialRemainingTime={remainingSecondsFromToday % hourSeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingSecondsFromToday - totalElapsedTime > 0,
          })}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color: "#fff" }} className="text-lg">
              {renderTime(59 - getTimeMinutes(elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>
        <div className="text-white text-4xl">MINUTES</div>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="absolute">
          <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient
                id="secondsGradient"
                gradientTransform="rotate(90)"
              >
                <stop offset="7%" stop-color="#ff7777" />
                <stop offset="48%" stop-color="#ff4848" />
                <stop offset="75%" stop-color="#ef323a" />
              </linearGradient>
            </defs>

            <circle cx="5" cy="5" r="4" fill="url('#secondsGradient')" />
          </svg>
        </div>
        <CountdownCircleTimer
          {...timerProps}
          colors="url(#secondsGradient)"
          //   colors={["#f9b234", "#fd701e", "#ff5a24"]}
          //   colorsTime={[50, 40, 0]}
          trailStrokeWidth={1}
          strokeWidth={15}
          size={220}
          duration={minuteSeconds}
          initialRemainingTime={remainingSecondsFromToday % minuteSeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingSecondsFromToday - totalElapsedTime > 0,
          })}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color: "#fff" }} className="text-lg">
              {renderTime(getTimeSeconds(elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>
        <div className="text-white text-4xl">SECONDS</div>
      </div>
    </div>
  );
}
