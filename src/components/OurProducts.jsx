import React, { useState } from 'react';
import {
    Typography,
    Grid,
    Paper,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    IconButton,
    Button,
    Box,
    useMediaQuery,
} from '@mui/material';
import {
    FavoriteBorderOutlined as FavoriteBorderIcon,
    AddShoppingCartOutlined as AddShoppingCartIcon,
    Star as StarIcon,
    StarBorder as StarBorderIcon,
} from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useTheme } from '@mui/material/styles';
import ProductModal from './ProductModal';

const categories = [
    { name: 'Vegetables', icon: '🥦' },
    { name: 'Fruits', icon: '🍎' },
    { name: 'Dairy', icon: '🧀' },
    { name: 'Beverages', icon: '🥤' },
    { name: 'Snacks', icon: '🍿' },
    { name: 'Meat', icon: '🍖' },
];

const products = [
    {
        id: 1,
        category: 'Grain',
        name: 'Horse Gram',
        image: 'https://groca.myshopify.com/cdn/shop/products/Shop-26_7b8fa6d5-1a3c-42f9-ae94-02b6fcbb4263.png?v=1584695913&width=360',
        rating: 4.5,
        price: 2.99,
    },
    {
        id: 2,
        category: 'Snacks',
        name: 'Coco Cookies',
        image: 'https://groca.myshopify.com/cdn/shop/products/Shop-30_19053d26-edd6-4592-a8d7-791cd0961fc7.png?v=1584697386&width=360',
        rating: 4.2,
        price: 1.99,
    },
    {
        id: 3,
        category: 'Grain',
        name: 'Vetch Seeds',
        image: 'https://groca.myshopify.com/cdn/shop/products/Shop-28.png?v=1584697163&width=360',
        rating: 4.7,
        price: 3.49,
    },
    {
        id: 4,
        category: 'Snacks',
        name: 'Butter Cookies',
        image: 'https://groca.myshopify.com/cdn/shop/products/Shop-14_ff25c471-0a81-4502-8a8f-aaa077f13baf.png?v=1584085876&width=360',
        rating: 4.0,
        price: 1.49,
    },
    {
        id: 5,
        category: 'meat',
        name: 'Fish Curry',
        image: 'https://groca.myshopify.com/cdn/shop/products/Shop-13.png?v=1584085502&width=360',
        rating: 4.3,
        price: 0.99,
    },
    {
        id: 6,
        category: 'Vegetables',
        name: 'Beet Roots',
        image: 'https://groca.myshopify.com/cdn/shop/products/Shop-22_df2f4015-e37d-4ae2-9fa8-876e15e78566.png?v=1584694777&width=360',
        rating: 4.3,
        price: 10.0,
    },
];

const OurProducts = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [weight, setWeight] = useState(1);

    const handleQuantityChange = (amount) => {
        setQuantity((prev) => Math.max(1, prev + amount));
    };

    const handleWeightChange = (newWeight) => {
        setWeight(newWeight);
    };

    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const renderRatingStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<StarIcon key={i} color="primary" />);
            } else {
                stars.push(<StarBorderIcon key={i} color="primary" />);
            }
        }
        return stars;
    };

    return (
        <div style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Our Products
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {categories.map((category, index) => (
                    <Grid
                        item
                        key={index}
                        xs={6}
                        sm={4}
                        md={2}
                        style={{ textAlign: 'center' }}
                    >
                        <Paper
                            style={styles.categoryCircle}
                            className="category-circle"
                        >
                            {category.icon}
                        </Paper>
                        <Typography variant="subtitle1">
                            {category.name}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
            <Grid container spacing={4} style={{ marginTop: '2rem' }}>
                {products.map((product, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card className="product-card">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={product.name}
                                    height="200"
                                    image={product.image}
                                />
                                <CardContent style={{ textAlign: 'center' }}>
                                    <div className="icon-group">
                                        <IconButton
                                            aria-label="add to favorites"
                                            className="card-icon"
                                            style={{
                                                backgroundColor: 'black',
                                                color: 'white',
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </IconButton>
                                        <IconButton
                                            aria-label="view details"
                                            onClick={() =>
                                                handleOpenModal(product)
                                            }
                                            className="card-icon"
                                            style={{
                                                backgroundColor: 'black',
                                                color: 'white',
                                                marginLeft: '8px',
                                            }}
                                        >
                                            <VisibilityIcon />
                                        </IconButton>
                                    </div>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        {product.name}
                                    </Typography>
                                    <div className="rating-stars">
                                        {renderRatingStars(product.rating)}
                                    </div>
                                    <Typography variant="body1" gutterBottom>
                                        ${product.price}
                                    </Typography>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            startIcon={<AddShoppingCartIcon />}
                                            style={{
                                                width: '80%',
                                            }}
                                        >
                                            Add to Cart
                                        </Button>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <ProductModal
                open={openModal}
                product={selectedProduct}
                onClose={handleCloseModal}
                quantity={quantity}
                weight={weight}
                onQuantityChange={handleQuantityChange}
                onWeightChange={handleWeightChange}
            />
            <style>
                {`
                .category-circle:hover {
                    background-color: #a0cfa0;
                    transition: background-color 0.3s ease-in-out;
                }
                .product-card {
                    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out;
                }
                .product-card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
                    border: 1px solid green;
                }
                .product-card:hover .card-icon {
                    visibility: visible;
                    opacity: 1;
                    transition: opacity 0.3s ease-in-out;
                }
                .card-icon {
                    visibility: hidden;
                    opacity: 0;
                }
                .icon-group:hover .card-icon {
                    visibility: visible;
                    opacity: 1;
                }
                .rating-stars {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 0.5rem;
                }
                `}
            </style>
        </div>
    );
};

const styles = {
    categoryCircle: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        marginBottom: '0.5rem',
        fontSize: '1.5rem',
    },
};

export default OurProducts;
