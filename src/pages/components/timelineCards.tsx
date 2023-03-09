import * as React from "react";
import { FunctionComponent } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineCardDetail from "./TimelineCardDetail";
import { TimelineDetail } from "@/utils";

interface Props {
  timelineData: TimelineDetail[];
}

const TimelineCards: FunctionComponent<Props> = ({ timelineData }) => {
  return (
    <Timeline>
      {timelineData?.map((timelineDetail, index) => {
        return (
          <TimelineCardDetail key={index} timelineDetail={timelineDetail} />
        );
      })}
    </Timeline>
  );
};

export default TimelineCards;
