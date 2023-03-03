import { useState } from "react";
import Countdown from "./components/Countdown";

interface Events {
  name: string;
  milestone: string;
}

const DUMMY_EVENTS: Events[] = [
  { name: "Beta 1", milestone: "30/3/2023" },
  { name: "Beta 2", milestone: "13/4/2023" },
  { name: "Soft launch", milestone: "20/4/2023" },
  { name: "Close Speed L", milestone: "30/4/2023" },
  { name: "Official launch", milestone: "5/5/2023" },
];

function App() {
  return (
    <div className="flex items-center flex-col w-screen h-screen">
      <div className="p-10 text-white text-3xl w-fit border-2 border-white mt-4">
        Upcoming event: {DUMMY_EVENTS[0].name} at {DUMMY_EVENTS[0].milestone} 
      </div>
      <Countdown />
    </div>
  );
}

export default App;
