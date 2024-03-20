import React, { useState } from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { format } from 'date-fns';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {Link} from 'react-router-dom';


function createData(id, name, placedDate, deliveryAddress, deliveryDueDate, status) {
  return { id, name, placedDate, deliveryAddress, deliveryDueDate, status };
}

const rows = [
  createData(1, 'John Doe', '2024-03-15', 'No.13, Malabe,Colombo', '2024-03-25', 'Done'),
  createData(2, 'Jane Smith', '2024-03-16', 'No.13, Malabe,Colombo', '2024-03-25', 'pending'),
  createData(3, 'Bob Johnson', '2024-03-17', 'No.13, Malabe,Colombo', '2024-03-25', 'pending'),
  createData(4, 'Alice Williams', '2024-03-18', 'No.13, Malabe,Colombo', '2024-03-25', 'pending'),
  createData(5, 'Eve Brown', '2024-03-19', 'No.13, Malabe,Colombo', '2024-03-25', 'pending'),
];

const Home = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleStatusChange = (index, newStatus) => {
    const updatedRows = [...rows];
    updatedRows[index].status = newStatus;
    // Assuming you have an API call or some other method to update the status on the server
    // Here, you can send the updated status to the server or update the database
    // For this example, we're just updating the local state
    setRows(updatedRows);
  };

  const handleAssignDriver = (orderId) => {
    // Logic for assigning a driver goes here
  };

  const currentDate = format(new Date(), 'MMMM dd, yyyy');

  return (
    <>
      <Container maxWidth={'800px'}>
        {/* Your existing code for registered users, staff, and current date cards */}
      </Container>

      <div className="flex justify-center">
        <Typography style={{ margin: '20px 0', fontSize: '32px', fontWeight: 'bold', fontFamily: 'Times New Roman' }}>
          Delivery Dashboard
        </Typography>
      </div>

      <Container maxWidth={'800px'}>
        <Paper sx={{ width: '100%', marginTop: 2 }}>
          <TableContainer sx={{ maxHeight: '100%' }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Order ID</TableCell>
                  <TableCell align="center">Customer Name</TableCell>
                  <TableCell align="center">Placed Date</TableCell>
                  <TableCell align="center">Delivery Address</TableCell>
                  <TableCell align="center">Delivery Due Date</TableCell>
                  <TableCell align="center">Delivery Method</TableCell>
                  <TableCell align="center">Driver</TableCell>
                  <TableCell align="center">Status (Done/Pending)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.placedDate}</TableCell>
                      <TableCell align="center">{row.deliveryAddress}</TableCell>
                      <TableCell align="center">{row.deliveryDueDate}</TableCell>
                      <TableCell align="center">
                        <ToggleButtonGroup
                          value={row.status}
                          exclusive
                          onChange={(event, newStatus) => handleStatusChange(index, newStatus)}
                          aria-label="status"
                        >
                          <ToggleButton value="pending">Pickup</ToggleButton>
                          <ToggleButton value="done">Home</ToggleButton>
                        </ToggleButtonGroup>
                      </TableCell>
                      <TableCell align="center">
                        <Link to="/delivery/addDriver">
                          <Button onClick={() => handleAssignDriver(row.id)}>Driver</Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[3, 25, 100]}
            component="div"
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    </>
  );
};

export default Home;
