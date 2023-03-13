import {
  TimelineDot,
} from "@mui/lab";
import { Events } from "../../model";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Divider from "@mui/material/Divider";

import Lottie, { Options } from "react-lottie";

interface Props {
  eventList: Events[];
  startTime: number;
  endTime: number;
  today: number;
}

const daySeconds = 86400;

const TimelineProject = (props: Props) => {
  // const classes = useStyles();
  const { eventList } = props;


  const convertDate = (date: string) => {
    const formatDate = new Date(date)
      .toLocaleString()
      .split(" ")[0]
      .replace(",", "");
    return formatDate;
  };

  const handleLineLength = (startMark: string, endMark: string | undefined) => {
    if (!(startMark && endMark)) return 0;
    const start = new Date(startMark).getTime() / 1000;
    const end = new Date(endMark).getTime() / 1000;
    const days = Math.ceil((end - start) / daySeconds);
    return days * 20;
  };

  const handleStylePassedColor = (event: Events) => {
    const findCurrent = eventList.find((e) => e.name === "Current");
    const hasPassed =
      new Date(event.milestone).getTime() <
      new Date(findCurrent?.milestone!).getTime();
    if (event.name === "Current") return "#EF4444";
    return hasPassed ? "#7bed9f" : "#70a1ff";
  };

  return (
    
    <div
      className="flex overflow-x-auto mt-20 z-20 scrollbar-thumb-slate-500 scrollbar-track-slate-600 pb-16 scrollbar-thin"
      style={{ maxWidth: "1600px" }}
    >
      {eventList.map((event, i) => {
        const defaultOptions: Options = {
          loop: true,
          autoplay: true,
          animationData: event.animation,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        };
        return (
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className="flex justify-center text-4xl"
                style={{
                  color: handleStylePassedColor(event),
                }}
              >
                {convertDate(event.milestone)}
              </div>
              <div>
                {event.animation ? (
                  <Lottie options={defaultOptions} height={150} width={200} />
                ) : (
                  <div
                    style={{ height: "150px" }}
                    className="flex items-center justify-center"
                  >
                    <TimelineDot
                      sx={{
                        // borderColor: handleStylePassedColor(event),
                        border: `1px solid ${handleStylePassedColor(event)}`,
                        bgcolor: "transparent",
                        margin: "auto",
                        width: "80px",
                        height: "80px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {event.icon}
                    </TimelineDot>
                  </div>
                )}
              </div>
              <div
                className="flex justify-center text-3xl text-center whitespace-nowrap w-28 font-semibold"
                style={{
                  color: handleStylePassedColor(event),
                }}
              >
                {event.name}
              </div>
            </div>
            <Divider
              sx={{
                width: `${handleLineLength(
                  eventList[i].milestone,
                  i !== eventList.length - 1
                    ? eventList[i + 1].milestone
                    : undefined
                )}px`,
                bgcolor: `${
                  event.name === "Current"
                    ? "#70a1ff"
                    : handleStylePassedColor(event)
                }`,
                height: "3px",
              }}
            />
            {i === eventList.length - 1 && (
              <>
                <Divider sx={{
                width: `20px`,
                bgcolor: `${
                  event.name === "Current"
                    ? "#70a1ff"
                    : handleStylePassedColor(event)
                }`,
                height: "3px",
              }}/>
                <ArrowForwardIosIcon style={{ fill: "#70a1ff" }} />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
//
export default TimelineProject;
