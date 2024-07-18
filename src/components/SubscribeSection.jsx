import React from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { Notifications } from '@mui/icons-material';

const SubscribeSection = () => (
    <Box
        sx={{
            backgroundImage: `url("https://groca.myshopify.com/cdn/shop/files/bg-3.jpg?v=1614918264&width=1780")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '4rem 2rem',
            textAlign: 'center',
            color: '#000000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
    >
        <Typography variant="h5" gutterBottom sx={{ color: '#000000' }}>
            Subscribe to our Newsletter
        </Typography>
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                maxWidth: '500px',
                margin: '0 auto',
                marginBottom: '1rem',
                '& .MuiButton-contained': {
                    flex: '0 0 auto',
                    backgroundColor: '#4caf50',
                    '&:hover': {
                        backgroundColor: '#ff9800',
                    },
                },
                '& .MuiOutlinedInput-root': {
                    flex: '1 1 auto',
                },
            }}
        >
            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                InputProps={{
                    style: { color: '#000000' },
                }}
            />
            <Button
                variant="contained"
                color="primary"
                style={{ height: '56px', marginLeft: '5px' }}
            >
                <Notifications sx={{ mr: 1 }} />
                Subscribe
            </Button>
        </Box>
    </Box>
);

export default SubscribeSection;
