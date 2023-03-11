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
import CardDetail from "./cardDetail";

interface Props {
  timelineDetail: Commits;
  lastnode: boolean;
  username: string;
  reponame: string;
  index: number;
}

const TimelineCardDetail: FunctionComponent<Props> = ({
  timelineDetail,
  lastnode,
  username,
  reponame,
  index,
}) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot variant="outlined" color="secondary" />
        {!lastnode && <TimelineConnector sx={{ bgcolor: "secondary.main" }} />}
      </TimelineSeparator>
      <TimelineContent>
        <CardDetail
          timelineDetail={timelineDetail}
          username={username}
          reponame={reponame}
          index={index}
        />
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineCardDetail;
