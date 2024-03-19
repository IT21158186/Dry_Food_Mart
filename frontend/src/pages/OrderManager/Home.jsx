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

function createData(id, name, placedDate, totalPrice) {
  return { id, name, placedDate, totalPrice };
}

const rows = [
  createData(1, 'John Doe', '2024-03-15', 25.0),
  createData(2, 'Jane Smith', '2024-03-16', 30.0),
  createData(3, 'Bob Johnson', '2024-03-17', 15.0),
  createData(4, 'Alice Williams', '2024-03-18', 20.0),
  createData(5, 'Eve Brown', '2024-03-19', 40.0),
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
    setRows(updatedRows);
  };

  const [regUsers] = useState(100); // Example value
  const [staff] = useState(20); // Example value
  const currentDate = format(new Date(), 'MMMM dd, yyyy');

  return (
    <>
      <Container maxWidth={'800px'}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 2,
            flexWrap: 'wrap',
          }}
        >
          {/* Registered Users Card */}
          <Paper
            sx={{
              textAlign: 'center',
              width: 'calc(33% - 16px)',
              padding: 2,
              backgroundColor: '#26bdf9', // Change color as needed
              marginBottom: 2,
            }}
          >
            <Box>
              <Typography variant="h5" component="div" color="primary">
                Pending Orders
              </Typography>
              <Typography
                variant="h3"
                component="div"
                style={{ fontSize: 18, fontWeight: 'bold' }}
              >
                {regUsers}
              </Typography>
            </Box>
          </Paper>
          {/* Staff Card */}
          <Paper
            sx={{
              textAlign: 'center',
              width: 'calc(33% - 16px)',
              padding: 2,
              backgroundColor: '#26bdf9', // Change color as needed
              marginBottom: 2,
            }}
          >
            <Box>
              <Typography variant="h5" component="div" color="primary">
                Total Completed Orders
              </Typography>
              <Typography
                variant="h3"
                component="div"
                style={{ fontSize: 18, fontWeight: 'bold' }}
              >
                {staff}
              </Typography>
            </Box>
          </Paper>
          {/* Current Date Card */}
          <Paper
            sx={{
              textAlign: 'center',
              width: 'calc(33% - 16px)',
              padding: 2,
              backgroundColor: '#26bdf9', // Change color as needed
              marginBottom: 2,
            }}
          >
            <Box>
              <Typography variant="h5" component="div" color="primary">
                Date
              </Typography>
              <Typography
                variant="h3"
                component="div"
                style={{ fontSize: 18, fontWeight: 'bold' }}
              >
                {currentDate}
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>

      <div className="flex justify-center">
        <Typography style={{ margin: '20px 0', fontSize: '32px', fontWeight: 'bold', fontFamily: 'Times New Roman' }}>
          Order Dashboard
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
                  <TableCell align="center">Total Price</TableCell>
                  <TableCell align="center">Action</TableCell>
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
                      <TableCell align="center">{row.totalPrice}</TableCell>
                      <TableCell align="center">
                        <ToggleButtonGroup
                          value={row.status}
                          exclusive
                          onChange={(event, newStatus) => handleStatusChange(index, newStatus)}
                          aria-label="status"
                        >
                          <ToggleButton value="pending">Pending</ToggleButton>
                          <ToggleButton value="done">Done</ToggleButton>
                        </ToggleButtonGroup>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
      rowsPerPageOptions={[3, 25, 100]} // Include 3 as an option
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