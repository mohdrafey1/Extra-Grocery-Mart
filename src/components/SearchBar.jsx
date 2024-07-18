import React from 'react';
import {
    TextField,
    InputAdornment,
    Select,
    MenuItem,
    IconButton,
} from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '1rem',
                width: '90%',
            }}
        >
            <Select defaultValue="all" sx={{ width: '40%' }}>
                <MenuItem value="all">All Categories</MenuItem>
                <MenuItem value="veggies">Vegetables</MenuItem>
                <MenuItem value="fruits">Fruits</MenuItem>
                <MenuItem value="Dairy">Dairy</MenuItem>
                <MenuItem value="Meat">Meat</MenuItem>
                <MenuItem value="Snacks">Snacks</MenuItem>
            </Select>
            <TextField
                placeholder="Search..."
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                sx={{
                                    backgroundColor: 'lightblue',
                                    borderRadius: '50%',
                                }}
                            >
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    </div>
);

export default SearchBar;
