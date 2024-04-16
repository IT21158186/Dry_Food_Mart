import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiUrl } from '../../utils/Constants';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Salary() {
  const [salaries, setSalaries] = useState([]);
  const [users, setUsers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const [basic, setBasic] = useState('');
  const [attendanceAllowance, setAttendanceAllowance] = useState('');
  const [fuelAllowance, setFuelAllowance] = useState('');
  const [overtime, setOvertime] = useState('');
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);

  useEffect(() => {
    const fetchSalaries = async () => {
      try {
        const response = await axios.get(`${apiUrl}/salary`);
        setSalaries(response.data);
      } catch (error) {
        console.error('Error fetching salaries:', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${apiUrl}/user/all`);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchSalaries();
    fetchUsers();
  }, []);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`${apiUrl}/salary/`, {
        userId: selectedUser,
        basic,
        attendanceAllowance,
        fuelAllowance,
        overtime
      });
      setSuccessMessageOpen(true);
      setOpenDialog(false);
      // Refresh salary data
      const response = await axios.get(`${apiUrl}/salary/`);
      setSalaries(response.data);
    } catch (error) {
      console.error('Error creating salary:', error);
    }
  };

  const handleSuccessMessageClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccessMessageOpen(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Salary Details</h2>
      <Button variant="contained" onClick={handleDialogOpen}>Create Salary</Button>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <div className="dialog-content">
          <h2>Create Salary</h2>
          <Select
            value={selectedUser}
            onChange={handleUserChange}
            label="Select User"
            fullWidth
          >
            {users.map((user) => (
              <MenuItem key={user._id.$oid} value={user._id.$oid}>{user.firstName}</MenuItem>
            ))}
          </Select>
          <TextField
            label="Basic"
            type="number"
            value={basic}
            onChange={(e) => setBasic(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Attendance Allowance"
            type="number"
            value={attendanceAllowance}
            onChange={(e) => setAttendanceAllowance(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Fuel Allowance"
            type="number"
            value={fuelAllowance}
            onChange={(e) => setFuelAllowance(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Overtime"
            type="number"
            value={overtime}
            onChange={(e) => setOvertime(e.target.value)}
            fullWidth
            margin="normal"
          />
          <div className="dialog-actions">
            <Button onClick={handleDialogClose}>Cancel</Button>
            <Button onClick={handleSubmit} variant="contained" color="primary">Submit</Button>
          </div>
        </div>
      </Dialog>
      <table className="w-full border-collapse border border-gray-400 mt-4">
        <thead>
          <tr className="bg-blue-100">
            <th className="border border-gray-400 py-2 px-4">User Name</th>
            <th className="border border-gray-400 py-2 px-4">Basic</th>
            <th className="border border-gray-400 py-2 px-4">Attendance Allowance</th>
            <th className="border border-gray-400 py-2 px-4">Fuel Allowance</th>
            <th className="border border-gray-400 py-2 px-4">Overtime</th>
            <th className="border border-gray-400 py-2 px-4">Total Salary</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map((salary) => (
            <tr key={salary._id} className="bg-white">
              <td className="border border-gray-400 py-2 px-4">{users.find(user => user._id.$oid === salary.userId.$oid)?.firstName || 'Unknown'}</td>
              <td className="border border-gray-400 py-2 px-4">{salary.basic.toFixed(2)}</td>
              <td className="border border-gray-400 py-2 px-4">{salary.attendanceAllowance.toFixed(2)}</td>
              <td className="border border-gray-400 py-2 px-4">{salary.fuelAllowance.toFixed(2)}</td>
              <td className="border border-gray-400 py-2 px-4">{salary.overtime.toFixed(2)}</td>
              <td className="border border-gray-400 py-2 px-4">{salary.totalSalary.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Snackbar open={successMessageOpen} autoHideDuration={6000} onClose={handleSuccessMessageClose}>
        <Alert onClose={handleSuccessMessageClose} severity="success" sx={{ width: '100%' }}>
          Salary created successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}
