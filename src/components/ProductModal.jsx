import React from 'react';
import { Modal, Box, Typography, Button, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const ProductModal = ({ open, handleClose, product }) => {
    if (!product) {
        return null;
    }

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <IconButton onClick={handleClose} style={{ float: 'right' }}>
                    <Close />
                </IconButton>
                <Typography variant="h6">{product.name}</Typography>
                <Typography>{product.description}</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '1rem' }}
                >
                    Add to Cart
                </Button>
            </Box>
        </Modal>
    );
};

export default ProductModal;
