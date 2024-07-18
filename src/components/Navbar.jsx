import React from 'react';
import logo from '../assets/icons/logo.png';
import countryList from './countrylist';

import {
    AppBar,
    Toolbar,
    IconButton,
    MenuItem,
    Select,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    useMediaQuery,
    styled,
} from '@mui/material';
import {
    ShoppingCart,
    Favorite,
    Person,
    Menu as MenuIcon,
    Close as CloseIcon,
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1120,
            desktop: 1200,
        },
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    backgroundColor: '#B4E380',
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
    '&:hover': {
        backgroundColor: '#A2D56F',
    },
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
}));

const Navbar = () => {
    const [country, setCountry] = React.useState('IN');
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setMenuOpen(open);
    };

    const isLaptopUp = useMediaQuery(theme.breakpoints.up('laptop'));

    return (
        <ThemeProvider theme={theme}>
            <AppBar
                position="sticky"
                style={{
                    backgroundColor: '#B4E380',
                    height: 100,
                }}
            >
                <Toolbar
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant="h6"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'black',
                        }}
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ height: 100, width: 100 }}
                        />
                    </Typography>

                    {isLaptopUp && (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                color: 'black',
                                gap: 4,
                            }}
                        >
                            <MenuItem
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                }}
                            >
                                Home
                            </MenuItem>
                            <MenuItem
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                }}
                            >
                                Shop
                            </MenuItem>
                            <MenuItem
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                }}
                            >
                                Best Seller
                            </MenuItem>
                            <MenuItem
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                }}
                            >
                                Deal of the Day
                            </MenuItem>
                            <MenuItem
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                }}
                            >
                                Pages
                            </MenuItem>
                            <MenuItem
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                }}
                            >
                                Contact Us
                            </MenuItem>
                        </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {!isLaptopUp && (
                            <IconButton
                                edge="end"
                                color="black"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                style={{ marginRight: 8 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                        <IconButton style={{ marginRight: 8, color: 'black' }}>
                            <Favorite />
                        </IconButton>
                        <IconButton style={{ marginRight: 8, color: 'black' }}>
                            <ShoppingCart />
                        </IconButton>
                        <IconButton style={{ marginRight: 8, color: 'black' }}>
                            <Person />
                        </IconButton>
                        <Select
                            value={country}
                            onChange={handleCountryChange}
                            style={{ color: 'black', fontWeight: 'bold' }}
                            renderValue={(selected) => (
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <img
                                        src={`https://flagsapi.com/${selected}/flat/64.png`}
                                        alt={`Flag of ${selected}`}
                                        style={{
                                            width: 16,
                                            height: 16,
                                            marginRight: 8,
                                        }}
                                    />
                                    {selected}
                                </div>
                            )}
                        >
                            {Object.entries(countryList).map(([name, code]) => (
                                <MenuItem key={code} value={code}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <img
                                            src={`https://flagsapi.com/${code}/flat/64.png`}
                                            alt={`Flag of ${code}`}
                                            style={{
                                                width: 16,
                                                height: 16,
                                                marginRight: 8,
                                            }}
                                        />
                                        {name}
                                    </div>
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                </Toolbar>
                {!isLaptopUp && (
                    <Drawer
                        anchor="left"
                        open={menuOpen}
                        onClose={toggleDrawer(false)}
                        PaperProps={{
                            style: {
                                backgroundColor: '#f5f5f5',
                                width: 250,
                            },
                        }}
                    >
                        <DrawerHeader>
                            <Typography variant="h6" style={{ color: 'black' }}>
                                Menu
                            </Typography>
                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="close"
                                onClick={toggleDrawer(false)}
                            >
                                <CloseIcon />
                            </IconButton>
                        </DrawerHeader>
                        <List>
                            <StyledListItem button>
                                <ListItemText primary="Home" />
                            </StyledListItem>
                            <StyledListItem button>
                                <ListItemText primary="Shop" />
                            </StyledListItem>
                            <StyledListItem button>
                                <ListItemText primary="Best Seller" />
                            </StyledListItem>
                            <StyledListItem button>
                                <ListItemText primary="Deal of the Day" />
                            </StyledListItem>
                            <StyledListItem button>
                                <ListItemText primary="Pages" />
                            </StyledListItem>
                            <StyledListItem button>
                                <ListItemText primary="Contact Us" />
                            </StyledListItem>
                        </List>
                        <Divider />
                    </Drawer>
                )}
            </AppBar>
        </ThemeProvider>
    );
};

export default Navbar;
