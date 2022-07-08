import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Details from "../Details/Details";
import { useNavigate } from "react-router-dom";
import Main from "../Main/Main";
//import { SpeechState, useSpeechContext } from '@speechly/react-client'
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";
import useStyles from "./styles";

const ExpenseTracker = () => {
  const navigate = useNavigate();
  useEffect(() => {}, [navigate]);
  const classes = useStyles();
  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={12} md={3} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={12} md={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={12} md={3} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={12} md={3} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      {/* <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer> */}
    </div>
  );
};

export default ExpenseTracker;
