import * as React from "react";
import { FunctionComponent } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineCardDetail from "./timelineCardDetail";
import { ProjectCommits } from "@/utils";

interface Props {
  timelineData: ProjectCommits;
}

const TimelineCards: FunctionComponent<Props> = ({ timelineData }) => {
  return (
    <Timeline>
      {timelineData.commits.map((timelineDetail, index) => {
        return (
          <TimelineCardDetail
            key={index}
            timelineDetail={timelineDetail}
            lastnode={timelineData.commits.length - 1 === index}
          />
        );
      })}
    </Timeline>
  );
};

export default TimelineCards;
