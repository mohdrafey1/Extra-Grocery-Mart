import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    IconButton,
    Typography,
    Box,
    useMediaQuery,
} from '@mui/material';
import { Add, Remove, Close } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const ProductModal = ({
    open,
    product,
    onClose,
    quantity,
    weight,
    onQuantityChange,
    onWeightChange,
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width:900px)');
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <IconButton
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    zIndex: 500,
                }}
            >
                <Close />
            </IconButton>
            {product && (
                <Box display="flex" flexDirection={isMobile ? 'column' : 'row'}>
                    <Box
                        flex={1}
                        padding={2}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{ maxHeight: '300px', width: 'auto' }}
                        />
                    </Box>
                    <Box
                        flex={1}
                        padding={2}
                        position="relative"
                        margin="0 auto"
                    >
                        <DialogTitle
                            style={{ fontWeight: 'bold', color: 'black' }}
                        >
                            {product.name}
                        </DialogTitle>
                        <DialogContent>
                            <Typography
                                variant="h6"
                                style={{ color: 'green' }}
                                gutterBottom
                            >
                                Price: ${product.price}
                            </Typography>
                            <Box
                                display="flex"
                                alignItems="center"
                                marginTop={2}
                            >
                                <Typography
                                    variant="body1"
                                    style={{
                                        fontWeight: 'bold',
                                        marginRight: '10px',
                                    }}
                                >
                                    Category:
                                </Typography>
                                <Typography variant="body1">
                                    {product.category}
                                </Typography>
                            </Box>
                            <Box
                                display="flex"
                                alignItems="center"
                                marginTop={2}
                            >
                                <Typography
                                    variant="body1"
                                    style={{
                                        fontWeight: 'bold',
                                        marginRight: '10px',
                                    }}
                                >
                                    Weight:
                                </Typography>
                                <Box display="flex" alignItems="center">
                                    {[5, 3, 2, 1].map((w) => (
                                        <Button
                                            key={w}
                                            variant={
                                                weight === w
                                                    ? 'contained'
                                                    : 'outlined'
                                            }
                                            onClick={() => onWeightChange(w)}
                                            style={{
                                                margin: '0 5px',
                                                minWidth: isSmallScreen
                                                    ? '30px'
                                                    : '40px',
                                                padding: isSmallScreen
                                                    ? '5px'
                                                    : '8px',
                                            }}
                                        >
                                            {w}kg
                                        </Button>
                                    ))}
                                </Box>
                            </Box>
                            <Box
                                display="flex"
                                alignItems="center"
                                marginTop={1}
                            >
                                <Typography
                                    variant="body1"
                                    style={{
                                        fontWeight: 'bold',
                                        marginRight: '10px',
                                    }}
                                >
                                    Quantity:
                                </Typography>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    border="1px solid #ccc"
                                    borderRadius="4px"
                                >
                                    <IconButton
                                        onClick={() => onQuantityChange(-1)}
                                        style={{
                                            borderRight: '1px solid #ccc',
                                            minWidth: isSmallScreen
                                                ? '30px'
                                                : '40px',
                                            padding: isSmallScreen
                                                ? '5px'
                                                : '8px',
                                        }}
                                    >
                                        <Remove />
                                    </IconButton>
                                    <Box padding="0 15px">{quantity}</Box>
                                    <IconButton
                                        onClick={() => onQuantityChange(1)}
                                        style={{
                                            borderLeft: '1px solid #ccc',
                                            minWidth: isSmallScreen
                                                ? '30px'
                                                : '40px',
                                            padding: isSmallScreen
                                                ? '5px'
                                                : '8px',
                                        }}
                                    >
                                        <Add />
                                    </IconButton>
                                </Box>
                            </Box>
                        </DialogContent>
                        <DialogActions
                            style={{
                                display: 'flex',
                                justifyContent: 'start',
                                padding: '16px',
                            }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                style={{
                                    backgroundColor: 'green',
                                    marginRight: isMobile ? '10px' : 0,
                                    minWidth: isSmallScreen ? '80px' : '120px',
                                    padding: isSmallScreen ? '6px' : '8px',
                                }}
                                onMouseEnter={(e) =>
                                    (e.target.style.backgroundColor = 'orange')
                                }
                                onMouseLeave={(e) =>
                                    (e.target.style.backgroundColor = 'green')
                                }
                            >
                                Add to Cart
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{
                                    backgroundColor: 'green',
                                    minWidth: isSmallScreen ? '80px' : '120px',
                                    padding: isSmallScreen ? '6px' : '8px',
                                }}
                                onMouseEnter={(e) =>
                                    (e.target.style.backgroundColor = 'orange')
                                }
                                onMouseLeave={(e) =>
                                    (e.target.style.backgroundColor = 'green')
                                }
                            >
                                Add to Wishlist
                            </Button>
                        </DialogActions>
                    </Box>
                </Box>
            )}
        </Dialog>
    );
};

export default ProductModal;
