import React from "react";
import {
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Divider,
  Card,
} from "@material-ui/core";
import Form from "./Form/Form";
import useStyles from "./styles";
import List from "./List/List";
const Main = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance $100
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;