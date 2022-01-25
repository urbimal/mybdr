import React from "react";
import Sidebar from "./Sidebar";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const Exchange = () => {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

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
            <Box
              component='form'
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete='off'
            >
              <div>
                <TextField
                  id='outlined-select-currency'
                  select
                  label='From'
                  value={currency}
                  onChange={handleChange}
                  helperText='Please select your currency'
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id='outlined-select-currency-native'
                  select
                  label='To'
                  value={currency}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  helperText='Please select your currency'
                >
                  {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </div>
            </Box>
            <FormControl margin='normal'>
              <InputLabel htmlFor='my-input'>Sum</InputLabel>
              <Input id='my-input' aria-describedby='my-helper-text' />
            </FormControl>
            <FormControl margin='normal'>
              <InputLabel htmlFor='my-input'>Result</InputLabel>
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
            Send
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Exchange;
