import * as React from "react";
import { FunctionComponent } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Commits } from "@/utils";

interface Props {
  timelineDetail: Commits;
  username: string;
  reponame: string;
  index: number;
}

const CardDetail: FunctionComponent<Props> = ({
  timelineDetail,
  username,
  reponame,
  index,
}) => {
  let commitUrl = `https://github.com/${username}/${reponame}/commit/${timelineDetail.sha}`;

  return (
    <Card sx={{ minWidth: 270 }} data-testid="commitDetailCard">
      <CardContent>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          {`${timelineDetail.datetime.date} ${timelineDetail.datetime.time}`}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary">
          {timelineDetail.author}
        </Typography>
        <br />
        <Typography variant="body1">{timelineDetail.message}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href={commitUrl}
          target="_blank"
          data-testid={`checkoutCommitButton${index}`}
        >
          Check out commit
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardDetail;
