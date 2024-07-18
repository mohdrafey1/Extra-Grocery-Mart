import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography, Box } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const items = [
    {
        image: 'https://groca.myshopify.com/cdn/shop/files/slider-3.jpg?v=1614918563',
        discountText: 'Up to 50% off on all vegetables!',
    },
    {
        image: 'https://groca.myshopify.com/cdn/shop/files/slider-2.jpg?v=1614918563',
        discountText: 'Fresh Vegetables available!',
    },
    {
        image: 'https://groca.myshopify.com/cdn/shop/files/slider-1.jpg?v=1614918563',
        discountText: 'Get the best deals on Grocery!',
    },
];

const HeroSection = () => {
    return (
        <div style={{ position: 'relative' }}>
            <Carousel
                NextIcon={<ArrowForwardIos />}
                PrevIcon={<ArrowBackIos />}
                navButtonsAlwaysVisible={true}
                navButtonsProps={{
                    style: {
                        backgroundColor: 'green',
                        borderRadius: 10,
                        opacity: 0.4,
                    },
                }}
                navButtonsWrapperProps={{
                    style: {
                        bottom: '0',
                        top: 'unset',
                    },
                }}
            >
                {items.map((item, i) => (
                    <Paper key={i} style={{ position: 'relative' }}>
                        <img
                            src={item.image}
                            alt={`slide-${i}`}
                            style={{
                                width: '100%',
                                height: '100vh',
                                objectFit: 'cover',
                            }}
                        />
                        <div style={styles.overlay}>
                            <Box>
                                <Typography
                                    variant="h3"
                                    style={styles.discountText}
                                    color="green"
                                >
                                    {item.discountText}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="success"
                                    style={styles.button}
                                >
                                    Buy Now
                                </Button>
                            </Box>
                        </div>
                    </Paper>
                ))}
            </Carousel>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
    },
    discountText: {
        marginBottom: '1rem',
    },
    button: {
        padding: '0.5rem 2rem',
    },
};

export default HeroSection;
