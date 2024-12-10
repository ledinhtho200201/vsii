import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Xác định xem màn hình là mobile hay desktop
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (open: boolean) => {
        setDrawerOpen(open);
    };

    // Danh sách menu
    const menuItems = ['Bán', 'Cho thuê', 'Danh mục', 'Blogs', 'FAQ', 'Về chúng tôi'];

    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
                {/* Logo */}
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <span style={{ color: '#FF9900', fontWeight: 'bold' }}>COMACPRO</span>
                </Typography>

                {/* Desktop Menu */}
                {!isMobile && (
                    <>
                        {menuItems.map((item, index) => (
                            <Button key={index} color="inherit">
                                {item}
                            </Button>
                        ))}
                        <Button variant="outlined" sx={{ ml: 2, borderColor: '#FF9900', color: '#FF9900' }}>
                            Đăng ký
                        </Button>
                        <Button variant="contained" sx={{ ml: 2, backgroundColor: '#FF9900', color: '#fff' }}>
                            Đăng nhập
                        </Button>
                    </>
                )}

                {/* Mobile Menu */}
                {isMobile && (
                    <>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
                            <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
                                <List>
                                    {menuItems.map((text, index) => (
                                        <ListItem component="button" key={index}>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    ))}
                                    <ListItem component="button">
                                        <Button variant="outlined" sx={{ width: '100%', borderColor: '#FF9900', color: '#FF9900' }}>
                                            Đăng ký
                                        </Button>
                                    </ListItem>
                                    <ListItem component="button">
                                        <Button variant="contained" sx={{ width: '100%', backgroundColor: '#FF9900', color: '#fff' }}>
                                            Đăng nhập
                                        </Button>
                                    </ListItem>
                                </List>
                            </Box>
                        </Drawer>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
