import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import data from "../../datapresidents.json";
import { Outlet } from "react-router-dom";

import Select from "@mui/material/Select";

import { Link } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";

import FormControl from "@mui/material/FormControl";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export default function CustomizedTables() {
  const [age, setAge] = React.useState("1");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="head">
        <h2 className="text">Hall of Fame</h2>
      </div>

      <Box
        textAlign="center"
        style={{ width: "50%", margin: "20px 75% 0 25%" }}
      >
        <FormControl style={{ borderColor: "#7620ff" }} fullWidth>
          <Select
            style={{
              borderColor: "#7620ff",
              border: "solid black",
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            displayEmpty
            onChange={handleChange}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem component={Link} to="/halloffame/presidents" value="1">
              Previous Hall Presidents
            </MenuItem>
            <MenuItem component={Link} to="/halloffame/bestgsec" value="2">
              Best General Secretaries
            </MenuItem>
            <MenuItem component={Link} to="/halloffame/bestsecy" value="3">
              Best Secretaries
            </MenuItem>
            <MenuItem component={Link} to="/halloffame/bestlajpatian" value="4">
              Best Lajpatian (Prof. Bhattacharya Cap)
            </MenuItem>
            <MenuItem component={Link} to="/halloffame/freedom" value="5">
              Freedom Of the Hall
            </MenuItem>
            <MenuItem component={Link} to="/halloffame/bestfresher" value="6">
              Best Fresher
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TableContainer component={Paper}>
        <Table
          style={{ width: "70%", margin: "32px auto 32px" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell
                align="center"
                style={{ backgroundColor: "#7620ff" }}
              >
                Hall President
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{ backgroundColor: "#7620ff" }}
              >
                Year
              </StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((president) => (
              <StyledTableRow>
                <StyledTableCell align="center" component="th" scope="row">
                  {president.name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {president.year}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

// export default function HallOfFame(){
//     return(
//         <div>
//             <div className="box">
//                 <div className="head">
//                     <h2 className="text">Hall of Fame</h2>
//                  </div>
//             </div>
//         </div>
//     )
// }
