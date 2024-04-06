import React, { useState } from "react";
import { TextField, Select, MenuItem, Button, FormControl, InputLabel, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function InventoryAddItems() {
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (<>
        <div className="max-w-md mx-auto">
            <h1 className="text-3xl text-center mb-6">Inventory Add</h1>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Item Name"
                            variant="outlined"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel id="category-label">Category</InputLabel>
                            <Select
                                labelId="category-label"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                label="Category"
                            >
                                <MenuItem value="Snacks">Snacks</MenuItem>
                                <MenuItem value="Bakery">Bakery</MenuItem>
                                <MenuItem value="Sweets">Sweets</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Quantity"
                            variant="outlined"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Price"
                            variant="outlined"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <input
                    accept="image/*"
                    id="image-upload"
                    type="file"
                    onChange={handleImageChange}
                    className="hidden"
                />
                <Grid>
                    <br></br>
                    <label htmlFor="image-upload">
                        <Button variant="contained" component="span" >
                            Upload Image
                        </Button>
                    </label>
                </Grid>

            </form>

            <br></br>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button style={{ backgroundColor: '#4CAF50', color: 'white', marginRight: '8px' }} variant="contained" fullWidth>
                    Add
                </Button>
                <div style={{ width: '8px' }}></div> {/* This adds space between buttons */}
                <Button style={{ backgroundColor: '#f44336', color: 'white' }} variant="contained" fullWidth component={Link} to="/inventory">
                    Cancel
                </Button>
            </div>



        </div>
    </>
    );
}