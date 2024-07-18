import React from 'react';
import { Grid, Typography, Link } from '@mui/material';

const Footer = () => (
    <footer style={{ padding: '2rem', backgroundColor: '#333', color: '#fff' }}>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
                <Typography variant="h6">Help & Support</Typography>
                <Link
                    href="#Footer"
                    color="inherit"
                    style={{
                        textDecoration: 'none',
                        display: 'block',
                        marginTop: '0.5rem',
                        transition: 'color 0.3s',
                    }}
                    sx={{
                        '&:hover': {
                            color: '#ff9800',
                        },
                    }}
                >
                    FAQ
                </Link>
                <Link
                    href="#Footer"
                    color="inherit"
                    style={{
                        textDecoration: 'none',
                        display: 'block',
                        marginTop: '0.5rem',
                        transition: 'color 0.3s',
                    }}
                    sx={{
                        '&:hover': {
                            color: '#ff9800',
                        },
                    }}
                >
                    Shipping & Returns
                </Link>
                <Link
                    href="#Footer"
                    color="inherit"
                    style={{
                        textDecoration: 'none',
                        display: 'block',
                        marginTop: '0.5rem',
                        transition: 'color 0.3s',
                    }}
                    sx={{
                        '&:hover': {
                            color: '#ff9800',
                        },
                    }}
                >
                    Contact Us
                </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography variant="h6">Information</Typography>
                <Link
                    href="#Footer"
                    color="inherit"
                    style={{
                        textDecoration: 'none',
                        display: 'block',
                        marginTop: '0.5rem',
                        transition: 'color 0.3s',
                    }}
                    sx={{
                        '&:hover': {
                            color: '#ff9800',
                        },
                    }}
                >
                    About Us
                </Link>
                <Link
                    href="#Footer"
                    color="inherit"
                    style={{
                        textDecoration: 'none',
                        display: 'block',
                        marginTop: '0.5rem',
                        transition: 'color 0.3s',
                    }}
                    sx={{
                        '&:hover': {
                            color: '#ff9800',
                        },
                    }}
                >
                    Privacy Policy
                </Link>
                <Link
                    href="#Footer"
                    color="inherit"
                    style={{
                        textDecoration: 'none',
                        display: 'block',
                        marginTop: '0.5rem',
                        transition: 'color 0.3s',
                    }}
                    sx={{
                        '&:hover': {
                            color: '#ff9800',
                        },
                    }}
                >
                    Terms & Conditions
                </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography variant="h6">Contact</Typography>
                <Typography
                    variant="body2"
                    style={{
                        color: '#fff',
                        marginTop: '0.5rem',
                        transition: 'color 0.3s',
                    }}
                    sx={{
                        '&:hover': {
                            color: '#ff9800',
                        },
                    }}
                >
                    Address: 123 Grocery St, Food City
                </Typography>
                <Typography
                    variant="body2"
                    style={{
                        color: '#fff',
                        marginTop: '0.5rem',
                        transition: 'color 0.3s',
                    }}
                    sx={{
                        '&:hover': {
                            color: '#ff9800',
                        },
                    }}
                >
                    Email: support@grocerymart.com
                </Typography>
                <Typography
                    variant="body2"
                    style={{
                        color: '#fff',
                        marginTop: '0.5rem',
                        transition: 'color 0.3s',
                    }}
                    sx={{
                        '&:hover': {
                            color: '#ff9800',
                        },
                    }}
                >
                    Phone: +1 234 567 890
                </Typography>
            </Grid>
        </Grid>
        <Typography
            variant="body2"
            align="center"
            style={{ marginTop: '1rem', color: '#fff' }}
        >
            &copy; {new Date().getFullYear()} Extra Grocery Mart. All rights
            reserved.
        </Typography>
    </footer>
);

export default Footer;
