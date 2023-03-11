import * as React from "react";
import { FunctionComponent } from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Commits } from "@/utils";
import { Typography } from "@mui/material";

interface Props {
  timelineDetail: Commits;
  lastnode: boolean;
}

const TimelineCardDetail: FunctionComponent<Props> = ({
  timelineDetail,
  lastnode,
}) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="textSecondary">
        {timelineDetail.datetime.time}
        <Typography>{`by ${timelineDetail.author}`}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant="outlined" color="secondary" />
        {!lastnode && <TimelineConnector sx={{ bgcolor: "secondary.main" }} />}
      </TimelineSeparator>
      <TimelineContent>{timelineDetail.message}</TimelineContent>
    </TimelineItem>
  );
};

export default TimelineCardDetail;
