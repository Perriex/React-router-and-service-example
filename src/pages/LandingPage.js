import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  card: {
    borderRadius: "5px",
    margin: "10px",
  },
}));

const LandingPage = () => {
  const [data, setData] = useState();
  const [id, setId] = useState();
  const classes = useStyles();
  useEffect(() => {
    fetch(
      "https://random-data-api.com/api/lorem_ipsum/random_lorem_ipsum?size=20"
    ).then((res) => res.json().then((res) => setData(res)));
  }, []);
  useEffect(() => {
    if (id) {
      let temp = data.filter((item) => item.id !== id);
      setData(temp);
    }
  }, [id]);
  return (
    <div className="landing-wrapper">
      {data ? (
        data.map((item, index) => (
          <Paper className={classes.card}>
            <Typography variant="p">
              {index + 1 + " - " + item["very_long_sentence"]}
              <Button color="primary" onClick={(e) => setId(item["id"])}>
                delete
              </Button>
              <Link to={`/detail/${item.id}`}>
                <Button color="primary">detail</Button>
              </Link>
            </Typography>
          </Paper>
        ))
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default LandingPage;
