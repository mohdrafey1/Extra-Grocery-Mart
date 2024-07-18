import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';

const categories = [
    {
        image: 'https://groca.myshopify.com/cdn/shop/files/img-1.jpg?v=1614917996&width=1500',
        title: 'Vegetables',
        subtitle: '100% Fresh Products',
    },
    {
        image: 'https://groca.myshopify.com/cdn/shop/files/img-2.jpg?v=1614917996&width=1500',
        title: 'Fruits',
        subtitle: '100% Fresh Products',
    },
];

const ProductSection = () => {
    return (
        <div
            style={{
                padding: '2rem',
                backgroundColor: '#fff',
                marginTop: '15px',
            }}
        >
            <Grid container spacing={4} justifyContent="center">
                {categories.map((category, i) => (
                    <Grid item xs={12} sm={12} md={6} lg={6} key={i}>
                        <Paper style={styles.categoryCard} elevation={0}>
                            <div style={styles.imageContainer}>
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    style={styles.categoryImage}
                                />
                            </div>
                            <div style={styles.categoryContent}>
                                <Typography
                                    variant="h5"
                                    style={styles.categoryTitle}
                                >
                                    {category.title}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    style={styles.categorySubtitle}
                                >
                                    {category.subtitle}
                                </Typography>
                                <Button
                                    variant="contained"
                                    style={styles.button}
                                    sx={{
                                        bgcolor: '#4caf50',
                                        '&:hover': { bgcolor: '#ff9800' },
                                    }}
                                >
                                    Shop Now
                                </Button>
                            </div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

const styles = {
    categoryCard: {
        position: 'relative',
        height: '300px',
        overflow: 'hidden',
        borderRadius: '8px',
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    categoryImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    categoryContent: {
        position: 'absolute',
        top: '18%',
        left: '45%',
        textAlign: 'center',
        color: '#000',
        padding: '1rem',
    },
    categoryTitle: {
        fontSize: '2rem',
        marginBottom: '0.5rem',
    },
    categorySubtitle: {
        fontSize: '1.2rem',
        marginBottom: '1rem',
    },
    button: {
        padding: '0.75rem 2rem',
        borderRadius: '20px',
        textTransform: 'none',
    },
};

export default ProductSection;
