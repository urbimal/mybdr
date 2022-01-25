import React from "react";
import Sidebar from "./Sidebar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function createData(date, sum, details) {
  return { date, sum, details };
}

const rows = [
  createData("2022-04-01", 13, "Frozen yoghurt"),
  createData("2022-04-18", 9, "Ice cream sandwich"),
  createData("2022-09-14", 16, "Eclair"),
  createData("2022-09-27", 8, "Cupcake"),
  createData("2022-10-28", 6, "Gingerbread"),
];
const History = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
      }}
    >
      <Sidebar />
      <div>
        <Paper
          elevation={7}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align='right'>Sum</TableCell>
                <TableCell align='right'>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.date}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {row.date}
                  </TableCell>
                  <TableCell align='right'>{row.sum}</TableCell>
                  <TableCell align='right'>{row.details}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <Stack
          spacing={2}
          direction='row'
          style={{ justifyContent: "flex-end", marginTop: "14px" }}
        >
          <Button size='small' variant='contained'>
            Search
          </Button>
          <Button size='small' variant='contained'>
            Statement
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default History;
