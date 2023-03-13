import { useState } from "react";
import Countdown from "./components/Countdown";
import TimelineProject from "./components/Timeline";
import { Events } from "./model";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import MopedIcon from "@mui/icons-material/Moped";
import FlagIcon from "@mui/icons-material/Flag";
import ConstructionIcon from "@mui/icons-material/Construction";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import delivery from "./images/delivery.json";
import logo from "./images/logo.png";
import final from "./images/final.json";
import test from "./images/test.json";
import team from "./images/43108-business-team.json";
import launch from "./images/launch.json";
import remove from "./images/notFound.json";
function App() {
  const startTime =
    new Date("March 1, 2023 00:00:00 GMT+07:00").getTime() / 1000;
  const endTime =
    new Date("March 30, 2023 00:00:00 GMT+07:00").getTime() / 1000;
  const today = Date.now() / 1000;

  const DUMMY_EVENTS: Events[] = [
    {
      name: "Start",
      milestone: "March 1, 2023 00:00:00 GMT+07:00",
      // icon: <FollowTheSignsIcon fontSize="large" />,
      animation: team,
    },
    {
      name: "Current",
      milestone: new Date().toString(),
      icon: <MopedIcon fontSize="large" />,
      animation: delivery,
    },
    {
      name: "Beta 1",
      milestone: "March 30, 2023 00:00:00 GMT+07:00",
      // icon: <ConstructionIcon fontSize="large" />,
      animation: test,
    },
    {
      name: "Beta 2",
      milestone: "April 13, 2023 00:00:00 GMT+07:00",
      // icon: <ConstructionIcon fontSize="large" />,
      animation: test,
    },
    {
      name: "Soft launch",
      milestone: "April 20, 2023 00:00:00 GMT+07:00",
      // icon: <ImportantDevicesIcon fontSize="large" />,
      animation: launch,
    },
    {
      name: "Close Speed L",
      milestone: "April 30, 2023 00:00:00 GMT+07:00",
      // icon: <RemoveShoppingCartIcon fontSize="large" />,
      animation: remove,
    },
    {
      name: "Official launch",
      milestone: "May 5, 2023 00:00:00 GMT+07:00",
      // icon: <FlagIcon fontSize="large" />,
      animation: final,
    },
  ];

  DUMMY_EVENTS.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.milestone).getTime() - new Date(b.milestone).getTime();
  });

  const getUpcomingEvent = () => {
    const upcomingIndex =
      DUMMY_EVENTS.findIndex((e) => e.name === "Current") + 1;
    const upcomingEvent = DUMMY_EVENTS[upcomingIndex];
    return (
      <div className=" p-10 text-white text-3xl w-fit border-2 z-20 border-white mt-4">
        Upcoming event:{" "}
        <span className="text-red-500 font-semibold">{upcomingEvent.name}</span>{" "}
        on{" "}
        <span className="text-orange-400">
          {new Date(upcomingEvent.milestone)
            .toLocaleString()
            .split(" ")[0]
            .replace(",", "")}
        </span>
      </div>
    );
  };

  return (
    <>
      <div className="w-screen min-h-screen absolute z-0 bg-black opacity-70"></div>
      <div className="flex items-center flex-col max-w-screen z-20">
        <div className="flex justify-center z-20">
          {/* <div className="rounded-full mr-80 bg-white p-6 flex items-center justify-center">
            <img src={logo} className='w-24'/>
          </div> */}
          {getUpcomingEvent()}
        </div>
        <Countdown startTime={startTime} endTime={endTime} today={today} />
        <TimelineProject
          eventList={DUMMY_EVENTS}
          startTime={startTime}
          endTime={endTime}
          today={today}
        />
      </div>
    </>
  );
}

export default App;
