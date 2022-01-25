import React from "react";
import Sidebar from "./Sidebar";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Payment = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
      }}
    >
      <Sidebar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 0.77,
        }}
      >
        <Paper
          elevation={7}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div
            className='first'
            style={{ display: "flex", flexDirection: "column" }}
          >
            <FormControl margin='normal'>
              <InputLabel htmlFor='my-input'>From Account</InputLabel>
              <Input id='my-input' aria-describedby='my-helper-text' />
            </FormControl>
            <FormControl margin='normal'>
              <InputLabel htmlFor='my-input'>Ammount</InputLabel>
              <Input id='my-input' aria-describedby='my-helper-text' />
            </FormControl>
          </div>
          <div
            className='second'
            style={{ display: "flex", flexDirection: "column" }}
          >
            <FormControl margin='normal'>
              <InputLabel htmlFor='my-input'>To Account</InputLabel>
              <Input id='my-input' aria-describedby='my-helper-text' />
            </FormControl>
            <FormControl margin='normal'>
              <InputLabel htmlFor='my-input'>Name</InputLabel>
              <Input id='my-input' aria-describedby='my-helper-text' />
            </FormControl>
            <FormControl margin='normal'>
              <InputLabel htmlFor='my-input'>Details</InputLabel>
              <Input id='my-input' aria-describedby='my-helper-text' />
            </FormControl>
          </div>
        </Paper>
        <Stack
          spacing={2}
          direction='row'
          style={{ justifyContent: "flex-end", marginTop: "14px" }}
        >
          <Button size='small' variant='contained'>
            Cancel
          </Button>
          <Button size='small' variant='contained'>
            Send funds
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Payment;
