import { useState } from "react";
import Countdown from "./components/Countdown";
import TimelineProject from "./components/Timeline";
import { Events } from "./model";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import MopedIcon from '@mui/icons-material/Moped';
import FlagIcon from '@mui/icons-material/Flag';
import ConstructionIcon from '@mui/icons-material/Construction';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import delivery from "./images/delivery.json";
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
      icon: <FollowTheSignsIcon fontSize="large"/>,

    },
    {
      name: "Current",
      milestone: new Date().toString(),
      icon: <MopedIcon fontSize="large"/>,
      animation: delivery
    },
    {
      name: "Beta 1",
      milestone: "March 30, 2023 00:00:00 GMT+07:00",
      icon: <ConstructionIcon fontSize="large"/>,
    },
    {
      name: "Beta 2",
      milestone: "April 13, 2023 00:00:00 GMT+07:00",
      icon: <ConstructionIcon fontSize="large"/>,
    },
    {
      name: "Soft launch",
      milestone: "April 20, 2023 00:00:00 GMT+07:00",
      icon: <ImportantDevicesIcon fontSize="large"/>,
    },
    {
      name: "Close Speed L",
      milestone: "April 30, 2023 00:00:00 GMT+07:00",
      icon: <RemoveShoppingCartIcon fontSize="large"/>,
    },
    {
      name: "Official launch",
      milestone: "May 5, 2023 00:00:00 GMT+07:00",
      icon: <FlagIcon fontSize="large"/>,
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
      <div className="p-10 text-white text-3xl w-fit border-2 border-white mt-4">
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
    <div className="flex items-center flex-col max-w-screen">
      {getUpcomingEvent()}
      <Countdown startTime={startTime} endTime={endTime} today={today} />
      <TimelineProject
        eventList={DUMMY_EVENTS}
        startTime={startTime}
        endTime={endTime}
        today={today}
      />
    </div>
  );
}

export default App;
