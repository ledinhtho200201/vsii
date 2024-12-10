import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    Link,
    Drawer,
    List, ListItem, ListItemText, IconButton
} from "@mui/material";
import logo from '../assets/img/Logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import mbLogo from '../assets/img/Favicon.svg';
import { useState } from "react";

interface MenuItem {
    name: string;
    link: string;
}
const Header: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const toggleDrawer = (open: boolean) => {
        setDrawerOpen(open);
    };
    const menuItems: MenuItem[] = [
        { name: "Cho thuê", link: "/rent" },
        { name: "Bán", link: "/sell" },
        { name: "Danh mục", link: "/categories" },
        { name: "Blogs", link: "/blogs" },
        { name: "FAQ", link: "/faq" },
        { name: "Về chúng tôi", link: "/about" },
    ];

    return (
        <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none", py: 1 }}>
            <Toolbar sx={{ display: "flex", gap: 4 }}>
                {/* {Desktop menu} */}
                {!isMobile && (
                    <>
                        <Box
                            component="img"
                            src={logo}
                            alt="logo image"
                            sx={{
                                width: "229px",
                                height: "26px",
                            }}
                        />
                        <Box
                            sx={{
                                display: { xs: 'none', sm: 'none', md: "flex" },
                                alignItems: "center",
                                gap: 4,
                                py: 2,
                                backgroundColor: "#FFF",
                                flexGrow: 1,
                                justifyContent: "flex-start"
                            }}
                        >
                            {menuItems.map((item) => (
                                <Box
                                    key={item.name}
                                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                                >
                                    <Typography
                                        component="a"
                                        href={item.link}
                                        sx={{
                                            fontSize: "18px",
                                            fontWeight: 600,
                                            lineHeight: "27px",
                                            textAlign: "left",
                                            textDecoration: "none",
                                            color: "#2C2A29",
                                            "&:hover": { color: "#FF9800" },
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                        {/* <Button variant="outlined" sx={{ ml: 2, borderColor: '#FF9900', color: '#FF9900' }}>
                            Đăng ký
                        </Button>
                        <Button variant="contained" sx={{ ml: 2, backgroundColor: '#FF9900', color: '#fff' }}>
                            Đăng nhập
                        </Button> */}
                    </>
                )}

                {/* Mobile Menu */}
                {isMobile && (
                    <>
                        <Box
                            component="img"
                            src={mbLogo}
                            alt="mobile logo image"
                            sx={{
                                height: "26px",
                            }}
                        />
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
                            <Box sx={{ display: "block", width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
                                <List>

                                    {menuItems.map((item, index) => (
                                        <ListItem component="button" key={index}>
                                            <ListItemText primary={<>{item.name}</>} />
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
        </AppBar >
    );
};

export default Header;



