import { useState, useEffect } from "react";
import { apiUrl } from "../../utils/Constants";
import authAxios from "../../utils/authAxios";
import { toast } from "react-toastify";
import { Box, Container, Typography, Paper, TextField, Rating, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const OrderGoods = () => {
    const [orders, setOrders] = useState([]);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        sendTo: '',
        subject: 'Request Goods',
        description: '',
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreate = (field, value) => {
        setFormData((prevData) => ({ ...prevData, [field]: value }));
    };

    const handleSubmit = async () => {
        try {
            const result = await authAxios.post(`${apiUrl}/supplier/order`, formData);
            if (result) {
                const result2 = await authAxios.post(`${apiUrl}/user/send-email`, formData);
                if (result2) {
                    toast.success("Request send successfully");
                }
            }
            getOrders();
            setOpen(false);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const getOrders = async () => {
        try {
            const res = await authAxios.get(`${apiUrl}/supplier/order`);
            setOrders(res.data);
            console.log(res)
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 404) {
                toast.error('Orders is Empty');
            } else {
                toast.error(error.response?.data?.message || 'An error occurred');
            }
        }
    };

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <>
            <div className="flex justify-center">
                <Typography style={{ margin: '20px 0', fontSize: '32px', fontWeight: 'bold', fontFamily: 'Times New Roman' }}>
                    Order Goods
                </Typography>
            </div>

            <Container maxWidth={'800px'}>
                <Button onClick={handleClickOpen}>Send Mail Request</Button>
                <Paper sx={{ width: '100%', marginTop: 2 }}>
                    <TableContainer sx={{ maxHeight: '100%' }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Order ID</TableCell>
                                    <TableCell align="center">Supplier Email</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((row, index) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">{index + 1}</TableCell>
                                        <TableCell align="center">{row.sendTo}</TableCell>
                                        <TableCell align="center">{row.description}</TableCell>

                                    </TableRow>

                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    style: {
                        width: '33%',
                        minWidth: '200px',
                        maxWidth: '500px',
                    },
                }}
            >
                <DialogTitle id="alert-dialog-title">
                    Rate Driver
                </DialogTitle>
                <DialogContent>

                    <Typography component="legend">Email</Typography>
                    <TextField
                        id="outlined-multiline-static"
                        fullWidth
                        value={formData.sendTo} onChange={(e) => handleCreate('sendTo', e.target.value)}
                    />

                    <Typography component="legend">Discription</Typography>

                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        fullWidth
                        value={formData.description} onChange={(e) => handleCreate('description', e.target.value)}
                    />

                </DialogContent>

                <DialogActions>
                    <Button onClick={() => { handleSubmit() }}>Publish</Button>
                    <Button onClick={handleClose} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default OrderGoods;