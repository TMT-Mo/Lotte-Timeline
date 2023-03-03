import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

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

export default function App() {
  const startTime =
    new Date("March 1, 2023 00:00:00 GMT+07:00").getTime() / 1000;
  const endTime =
    new Date("March 30, 2023 00:00:00 GMT+07:00").getTime() / 1000;
  const today = Date.now() / 1000;

  //   const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
  //   const endTime = startTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - startTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  const remainingTime2 = endTime - today;
  const days2 = Math.ceil(remainingTime2 / daySeconds);
  const daysDuration2 = days2 * daySeconds;
  //const daysDuration2 = (30-days) * daySeconds;

  const display = false;

  return (
    <div className="App w-2/3 space-x-10 ">
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
          duration={daysDuration}
          initialRemainingTime={remainingTime2}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime2 - totalElapsedTime > 0,
          })}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color: "#fff" }} className="text-lg">
              {renderTime(getTimeDays(daysDuration - elapsedTime))}
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
          initialRemainingTime={remainingTime2 % daySeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime2 - totalElapsedTime > hourSeconds,
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
          initialRemainingTime={remainingTime2 % hourSeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime2 - totalElapsedTime > 0,
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
          initialRemainingTime={remainingTime2 % minuteSeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime2 - totalElapsedTime > 0,
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
