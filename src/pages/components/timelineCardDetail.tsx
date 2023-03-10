import * as React from "react";
import { FunctionComponent } from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Commits } from "@/utils";

interface Props {
  timelineDetail: Commits;
}

const TimelineCardDetail: FunctionComponent<Props> = ({ timelineDetail }) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="textSecondary">
        {timelineDetail.datetime.time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>{timelineDetail.message}</TimelineContent>
    </TimelineItem>
  );
};

export default TimelineCardDetail;
