import React, { useContext } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
// import { ExpenseTrackerContext } from "../../../context/context";

import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./styles";

const List = () => {
  const classes = useStyles();
  // const globalState = useContext(ExpenseTrackerContext);
  // console.log(globalState);
  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 500,
      date: "Wed Dec 16",
    },
    {
      id: 2,
      type: "Expense",
      category: "Washing Machine",
      amount: 200,
      date: "Wed Dec 17",
    },
    {
      id: 3,
      type: "Income",
      category: "Rent",
      amount: 5000,
      date: "Wed Dec 18",
    },
    {
      id: 4,
      type: "Expense",
      category: "Laptop",
      amount: 1000,
      date: "Wed Dec 18",
    },
    {
      id: 5,
      type: "Expense",
      category: "Mouse",
      amount: 250,
      date: "Wed Dec 19",
    },
  ];
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
