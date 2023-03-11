import * as React from "react";
import { FunctionComponent } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineCardDetail from "./timelineCardDetail";
import { ProjectCommits } from "@/utils";

interface Props {
  timelineData: ProjectCommits;
  username: string;
  reponame: string;
}

const TimelineCards: FunctionComponent<Props> = ({
  timelineData,
  username,
  reponame,
}) => {
  return (
    <Timeline position="alternate">
      {timelineData.commits.map((timelineDetail, index) => {
        return (
          <TimelineCardDetail
            key={index}
            timelineDetail={timelineDetail}
            lastnode={timelineData.commits.length - 1 === index}
            username={username}
            reponame={reponame}
            index={index}
          />
        );
      })}
    </Timeline>
  );
};

export default TimelineCards;
