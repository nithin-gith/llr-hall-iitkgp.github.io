import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link,Outlet  } from 'react-router-dom';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";




export default function SelectVariants() {
  const [age, setAge] = React.useState('');
  

    const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <TableContainer component={Paper}>
      <div className="head">
        <h2 className="text">Hall of Fame</h2>
        </div>
      
      </TableContainer>
     
      <FormControl sx={{ m: 1, minWidth: 120 }}
       style={
          { margin: "20px 55% 0 45%" }
          
      }>
       <Select
    labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
    value={age}
    label="Age"
    onChange={handleChange}
  >
          <Link to="presidents"><MenuItem style={{ textDecoration: 'none' }}  value="">Previous Hall Presidents</MenuItem></Link> 
          <Link to="bestgsecs"> <MenuItem  value={2}>Best General Secretaries</MenuItem></Link>
          <Link to="bestsecy"> <MenuItem  value={3}>Best Secretaries</MenuItem></Link>
          <Link to="bestlajpatian"> <MenuItem  value={4}>Best Lajpatian</MenuItem></Link>
          <Link to="freedom"> <MenuItem  value={5}>Freedom Of the Hall</MenuItem></Link>
          <Link to="bestfresher"> <MenuItem  value={6}>Best Fresher</MenuItem></Link>
        </Select>
      </FormControl>
      <Outlet />
    </div>
  );
}
