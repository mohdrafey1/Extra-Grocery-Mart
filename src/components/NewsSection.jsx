import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Grid,
    Container,
    Box,
} from '@mui/material';
import { CalendarToday, AccountCircle } from '@mui/icons-material';

const NewsCard = ({ title, image, date, author, text, link }) => (
    <Card
        sx={{ backgroundColor: '#ffffff', boxShadow: 'none', height: '100%' }}
    >
        <CardMedia
            component="img"
            alt={title}
            height="200"
            image={image}
            sx={{ paddingTop: '0' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h5" gutterBottom>
                {title}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.5rem',
                }}
            >
                <CalendarToday sx={{ marginRight: '0.5rem' }} />
                <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    sx={{ flexGrow: 1 }}
                >
                    {date}
                </Typography>
                <AccountCircle sx={{ marginRight: '0.5rem' }} />
                <Typography variant="subtitle1" color="textSecondary">
                    {author}
                </Typography>
            </Box>
            <Typography variant="body2" paragraph>
                {text}
            </Typography>
            <Button
                variant="contained"
                color="primary"
                href={link}
                sx={{
                    backgroundColor: '#4caf50',
                    '&:hover': {
                        backgroundColor: '#ff9800',
                    },
                }}
            >
                Read More
            </Button>
        </CardContent>
    </Card>
);

const NewsSection = () => (
    <div style={{ padding: '2rem', backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom>
                Latest News
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <NewsCard
                        title="Best In Quality Fresh Meat & Seafood"
                        image="https://groca.myshopify.com/cdn/shop/articles/blog-1_49ce4b16-fb0a-488e-a203-3a1a84091ced.jpg?v=1580990429&width=720"
                        date="July 16, 2024"
                        author="Ramamoorthi M"
                        text="Turpis nunc eget lorem dolor. Pretium quam vulputate dignissim suspendisse in est ante. Varius duis at consectetur lorem donec. Praesent semper feugiat nibh sed pulvinar proin. Suspendisse faucibus interdum posuere..."
                        link="/news/1"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <NewsCard
                        title="Best Way To Eat Dry Fruits And Nuts"
                        image="https://groca.myshopify.com/cdn/shop/articles/blog-2.jpg?v=1580990472&width=720"
                        date="July 15, 2024"
                        author="Ramamoorthi M"
                        text="Nunc id cursus metus aliquam eleifend mi in nulla. Aliquam sem et tortor consequat. Arcu odio ut sem nulla. Pharetra magna ac placerat vestibulum. Potenti nullam ac tortor vitae purus..."
                        link="/news/2"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <NewsCard
                        title="Fruits & Vegetable Nutrients For Your Health"
                        image="https://groca.myshopify.com/cdn/shop/articles/blog-3.jpg?v=1580990482&width=720"
                        date="July 16, 2024"
                        author="Ramamoorthi M"
                        text="Dolor sit amet consectetur adip elit. Nulla malesuada pellentesque elit eget gravida cum sociis. Integer vitae justo eget magna fermentum iaculis eu. Enim ut tellus elementum sagittis vitae et. Tellus molestie..."
                        link="/news/3"
                    />
                </Grid>
            </Grid>
        </Container>
    </div>
);

export default NewsSection;
