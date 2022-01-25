import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const MyAccount = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
      }}
    >
      <Sidebar />
      <div className='container'>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            123456789 RON
          </div>
          <Stack spacing={2} direction='row'>
            <Button size='small' variant='contained'>
              Add funds
            </Button>
            <Button size='small' variant='contained'>
              Send funds
            </Button>
          </Stack>
        </div>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableBody>
              <TableRow>
                <TableCell component='th' scope='row'>
                  <p style={{ margin: 0 }}>Current Account</p>
                  <p style={{ margin: 0 }}>ROCONT</p>
                </TableCell>
                <TableCell align='center'>123 RON</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th' scope='row'>
                  Current Account
                </TableCell>
                <TableCell align='center'>123 RON</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th' scope='row'>
                  Investment Account
                </TableCell>
                <TableCell align='center'>14124 RON</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Link to='/'>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default MyAccount;
