import {
  CircularProgress,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetData } from "../sevices/APIengine";

const DetailPage = () => {
  const { textId } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    GetData(`lorem_ipsum/random_lorem_ipsum?id=${textId}`).then((res) =>
      setData(res)
    );
  }, [textId]);
  return (
    <Container>
      {data ? (
        <Paper style={{ padding: "12px" }}>
          <Grid container justify="center" alignItems="center">
            <Grid item  xs={12}>
              <Typography variant="h2">{data.word}</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography variant="h4">{data.very_long_sentence}</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography variant="p">{data.questions}</Typography>
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};

export default DetailPage;
