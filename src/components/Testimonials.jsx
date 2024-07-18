import React from 'react';
import Slider from 'react-slick';
import { Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const testimonials = [
    {
        name: 'John Doe',
        role: 'Customer',
        testimonial:
            'Great products and excellent service! "Extra Mart has transformed my grocery shopping experience with its vast selection, seamless online platform, and exceptional customer service. From fresh produce to pantry staples, every order arrives promptly and in perfect condition. I highly recommend Groca Mart for its reliability and quality."',
        image: 'https://images.pexels.com/photos/6941449/pexels-photo-6941449.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        name: 'Jane Smith',
        role: 'Customer',
        testimonial:
            'I love the fresh veggies and fruits! Fresh, reliable, and customer-oriented! Grocery Mart exceeds expectations with every order. Their wide selection and prompt service make shopping a breeze. Whether its daily essentials or specialty items, Grocery Mart delivers quality and convenience right to your doorstep. ',
        image: 'https://images.pexels.com/photos/6941449/pexels-photo-6941449.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        name: 'Jane Smith',
        role: 'Customer',
        testimonial:
            'I love the fresh veggies and fruits! Fresh, reliable, and customer-oriented! Grocery Mart exceeds expectations with every order. Their wide selection and prompt service make shopping a breeze. Whether its daily essentials or specialty items, Grocery Mart delivers quality and convenience right to your doorstep. ',
        image: 'https://images.pexels.com/photos/6941449/pexels-photo-6941449.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];

const Testimonials = () => {
    const slider = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Box
            sx={{
                backgroundImage: `url("https://groca.myshopify.com/cdn/shop/files/bg-2.jpg?v=1614918252")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
            }}
        >
            <Box
                sx={{
                    maxWidth: '600px',
                    width: '100%',
                }}
            >
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    style={{
                        color: '#000',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    Our Clients Say
                </Typography>
                <Slider {...settings} ref={slider}>
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            sx={{
                                width: '100%',
                                backgroundColor: 'white',
                                borderRadius: '12px',
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            overflow: 'hidden',
                                            marginRight: '10px',
                                            display: 'flex',
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            alt={testimonial.name}
                                            image={testimonial.image}
                                            sx={{
                                                width: '100%',
                                                height: 'auto',
                                                borderRadius: '50%',
                                            }}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography variant="h5">
                                            {testimonial.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            {testimonial.role}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography
                                    variant="body1"
                                    sx={{ marginTop: '1rem' }}
                                >
                                    {testimonial.testimonial}
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginTop: '1rem',
                                    }}
                                >
                                    {[...Array(5)].map((_, starIndex) => (
                                        <StarIcon
                                            key={starIndex}
                                            color="primary"
                                        />
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Slider>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '1rem',
                    }}
                ></Box>
            </Box>
        </Box>
    );
};

export default Testimonials;
