import * as React from "react";
import { FunctionComponent } from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { TimelineDetail } from "@/utils";

interface Props {
  timelineDetail: TimelineDetail;
}

const TimelineCardDetail: FunctionComponent<Props> = ({ timelineDetail }) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="textSecondary">
        {timelineDetail.time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>{timelineDetail.description}</TimelineContent>
    </TimelineItem>
  );
};

export default TimelineCardDetail;
