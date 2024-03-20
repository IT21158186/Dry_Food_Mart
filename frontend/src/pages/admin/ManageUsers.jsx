import React, { useState } from 'react';
import Loader from '../../components/Loader/Loader';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material'; // Import MUI components
import { Delete } from '@mui/icons-material'; // Import MUI Delete icon

export default function ManageUsers() {
  // Sample user data
  const sampleUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', telephone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', telephone: '987-654-3210' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', telephone: '555-555-5555' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', telephone: '111-222-3333' },
    { id: 5, name: 'Eve White', email: 'eve@example.com', telephone: '999-888-7777' }
  ];

  // State to manage users
  const [users, setUsers] = useState(sampleUsers);
  const [openSignupDialog, setOpenSignupDialog] = useState(false);
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    telephone: '',
    address: ''
  });
  const [selectedUser, setSelectedUser] = useState(null);

  // Function to handle user deletion
  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  // Function to handle opening dialog for update
  const handleUpdateDialogOpen = (user) => {
    setSelectedUser(user);
    setOpenUpdateDialog(true);
  };

  // Function to handle opening dialog for signup
  const handleSignupDialogOpen = () => {
    setOpenSignupDialog(true);
  };

  // Function to handle closing dialogs
  const handleDialogClose = () => {
    setOpenSignupDialog(false);
    setOpenUpdateDialog(false);
    setSelectedUser(null);
    setFormData({
      name: '',
      telephone: '',
      address: ''
    });
  };

  // Function to handle form submission for signup
  const handleSignupSubmit = () => {
    // Perform signup logic here
    console.log(formData);
    handleDialogClose();
  };

  // Function to handle form submission for update
  const handleUpdateSubmit = () => {
    // Perform update logic here
    console.log(selectedUser);
    handleDialogClose();
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h2 className="text-2xl text-center my-4">Manage Users</h2>
      <Button variant="contained" color="primary" style={{ marginBottom: '20px' }} onClick={handleSignupDialogOpen}>Add New User</Button>
      <TableContainer component={Paper} style={{ maxWidth: '800px', margin: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Telephone</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.telephone}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" className="mr-2" onClick={() => handleUpdateDialogOpen(user)}>Update</Button>
                  <Button variant="outlined" color="error" startIcon={<Delete />} onClick={() => handleDelete(user.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Loader />
      {/* Signup Dialog */}
      <Dialog open={openSignupDialog} onClose={handleDialogClose}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <form>
            <TextField label="Name" name="name" value={formData.name} onChange={handleInputChange} fullWidth />
            <TextField label="Telephone" name="telephone" value={formData.telephone} onChange={handleInputChange} fullWidth />
            <TextField label="Address" name="address" value={formData.address} onChange={handleInputChange} fullWidth />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSignupSubmit} color="primary">Submit</Button>
          <Button onClick={handleDialogClose} color="secondary">Cancel</Button>
        </DialogActions>
      </Dialog>
      {/* Update Dialog */}
      <Dialog open={openUpdateDialog} onClose={handleDialogClose}>
        <DialogTitle>Update User</DialogTitle>
        <DialogContent>
          {selectedUser && (
            <form>
              <TextField label="Name" defaultValue={selectedUser.name} fullWidth />
              <TextField label="Email" defaultValue={selectedUser.email} fullWidth />
              <TextField label="Telephone" defaultValue={selectedUser.telephone} fullWidth />
            </form>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateSubmit} color="primary">Submit</Button>
          <Button onClick={handleDialogClose} color="secondary">Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
