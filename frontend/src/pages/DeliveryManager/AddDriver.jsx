import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from "@mui/material";

export default function AddDriver() {
  // Sample data for orders
  const orderDetails = {
    orderId: "123456",
    customerName: "John Doe",
    address: "123 Main St, Anytown, USA"
  };

  // Sample data for drivers
  const drivers = [
    { id: 1, name: "Not Selected" },
    { id: 2, name: "Thisaru Dilhara" },
    { id: 3, name: "Vishwa Vimukthi" },
    { id: 4, name: "Malinda Mihiran" }
  ];

  const [selectedDriver, setSelectedDriver] = useState("1");

  const handleDriverChange = (event) => {
    setSelectedDriver(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl mb-4">Order Details</h1>
        <TableContainer component={Paper} className="mb-4" style={{ marginTop: '20px' }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell><strong>Order ID:</strong></TableCell>
                <TableCell>{orderDetails.orderId}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Customer Name:</strong></TableCell>
                <TableCell>{orderDetails.customerName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Address:</strong></TableCell>
                <TableCell>{orderDetails.address}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <FormControl fullWidth>
          <InputLabel id="driver-select-label">{selectedDriver === "1" ? "Select Driver" : ""}</InputLabel>
          <Select
            labelId="driver-select-label"
            id="driver-select"
            value={selectedDriver}
            onChange={handleDriverChange}
          >
            {drivers.map((driver) => (
              <MenuItem key={driver.id} value={driver.id}>
                {driver.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" className="mt-4">
          Add Driver
        </Button>
      </div>
    </div>
  );
}
