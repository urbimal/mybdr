import * as React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function Sidebar() {
  return (
    <Paper
      elevation={1}
      style={
        {
          // display: "flex"
        }
      }
    >
      <Grid container spacing={2} columns={1}>
        <Grid item xs={4}>
          <Link to='/myaccount'>MyAccount</Link>
        </Grid>
        <Grid item xs={4}>
          <Link to='/history'>History</Link>
        </Grid>
        <Grid item xs={4}>
          <Link to='/payment'>Payment</Link>
        </Grid>
        <Grid item xs={4}>
          <Link to='/exchange'>Exchange</Link>
        </Grid>
      </Grid>
    </Paper>
  );
}
