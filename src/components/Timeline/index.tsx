import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  Timeline,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { makeStyles, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Events } from "../../model";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ConstructionIcon from "@mui/icons-material/Construction";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";

import Lottie, { Options } from "react-lottie";
const CustomizedTimeline = styled(
  Timeline,
  {}
)({
  transform: "rotate(-90deg)",
  //   height: "300px",
  position: "absolute",
  // maxWidth: "300px"
  maxHeight: "1600px",
});
const CustomizedUpsideTypography = styled(
  Typography,
  {}
)({
  // transform: "rotate(90deg)",
  // textAlign: "start",
  //   whiteSpace: "nowrap",
  color: "white",
  justifyContent: "center",
  // paddingTop: "50px",
  backgroundColor: "transparent",
  //   width: '100px',
  display: "flex",
});
const CustomizedDownsideTypography = styled(
  Typography,
  {}
)({
  transform: "rotate(90deg)",
  textAlign: "center",
  whiteSpace: "nowrap",
  color: "white",
  justifyContent: "center",
  paddingBottom: "20px",
  backgroundColor: "transparent",
  //   width: '100px',
  maxHeight: "100px",
  display: "flex",
});
const CustomizedIcon = styled(
  IconButton,
  {}
)({
  transform: "rotate(90deg)",
});

interface Props {
  eventList: Events[];
  startTime: number;
  endTime: number;
  today: number;
}

const daySeconds = 86400;

const TimelineProject = (props: Props) => {
  // const classes = useStyles();
  const { eventList, startTime, endTime, today } = props;

  const CustomizedConnector = styled(
    TimelineConnector,
    {}
  )({
    height: "200px",
  });

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
    // <CustomizedTimeline >
    //   {eventList.map((event, i) => {
    //     const defaultOptions: Options = {
    //       loop: true,
    //       autoplay: true,
    //       animationData: event.animation,
    //       rendererSettings: {
    //         preserveAspectRatio: "xMidYMid slice",
    //       },
    //     };
    //     return (
    //       <>
    //         <TimelineItem key={i}>
    //           <TimelineOppositeContent>
    //             <div
    //               className={`w-28 rotate-90 text-3xl ${event.animation ? 'translate-y-20' : 'translate-y-3'} translate-x-14 text-center flex justify-center`}
    //               style={{
    //                 color: handleStylePassedColor(event),
    //                 // maxHeight: '150px'
    //               }}
    //             >
    //               {event.name}
    //             </div>
    //           </TimelineOppositeContent>
    //           <TimelineSeparator sx={{ minWidth: "150px" }}>
    //             {/* <TimelineDot /> */}
    //             {/* <CustomizedIcon style={{ color: `${event.name === "Current" ? '#70a1ff' : '#fff'}` }} color="error">{event.icon ?? <TimelineDot />}</CustomizedIcon> */}
    //             <CustomizedIcon>
    //               {event.animation ? (
    //                 <Lottie options={defaultOptions} height={150} width={150} />
    //               ) : (
    //                 <TimelineDot
    //                   sx={{
    //                     bgcolor: handleStylePassedColor(event),
    //                   }}
    //                 >
    //                   {event.icon}
    //                 </TimelineDot>
    //               )}
    //             </CustomizedIcon>
    //             <TimelineConnector
    //               sx={{
    //                 height: `${handleLineLength(
    //                   eventList[i].milestone,
    //                   i !== eventList.length - 1
    //                     ? eventList[i + 1].milestone
    //                     : undefined
    //                 )}px`,
    //                 bgcolor: `${
    //                   event.name === "Current"
    //                     ? "#70a1ff"
    //                     : handleStylePassedColor(event)
    //                 }`,
    //               }}
    //             />
    //           </TimelineSeparator>
    //           <TimelineContent>
    //             {/* <CustomizedUpsideTypography
    //               style={{
    //                 color: handleStylePassedColor(event),
    //               }}
    //             >
    //               {convertDate(event.milestone)}
    //             </CustomizedUpsideTypography> */}
    //             <div
    //               className={`rotate-90 text-3xl ${event.animation ? 'translate-y-20' : 'translate-y-6'} -translate-x-20`}
    //               style={{
    //                 color: handleStylePassedColor(event),
    //               }}
    //             >
    //               {convertDate(event.milestone)}
    //             </div>
    //           </TimelineContent>
    //         </TimelineItem>
    //         {i === eventList.length - 1 && (
    //           <TimelineSeparator>
    //             <ArrowForwardIosIcon
    //               style={{ rotate: "90deg", fill: "#70a1ff" }}
    //             />
    //           </TimelineSeparator>
    //         )}
    //       </>
    //     );
    //   })}
    // </CustomizedTimeline>
    <div
      className="flex overflow-x-auto mt-20  scrollbar-thumb-slate-500 scrollbar-track-slate-600 pb-16 scrollbar-thin"
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
            <div className="flex flex-col ">
              <div
                className="flex justify-center text-2xl"
                style={{
                  color: handleStylePassedColor(event),
                }}
              >
                {convertDate(event.milestone)}
              </div>
              <div>
                {event.animation ? (
                  <Lottie options={defaultOptions} height={150} width={150} />
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
                className="flex justify-center text-2xl text-center whitespace-nowrap"
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
