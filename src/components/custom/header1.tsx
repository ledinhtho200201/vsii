import {
    AppBar,
    Toolbar,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Button,
    useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import logo from "../assets/img/Logo.png"; // Logo desktop/tablet
import mbLogo from "../assets/img/Favicon.svg"; // Logo mobile

interface MenuItem {
    name: string;
    link: string;
}

const Header: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Kích thước mobile
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // Kích thước tablet
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
        <AppBar
            position="static"
            sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                py: 1,
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* Logo */}
                <Box
                    component="img"
                    src={isMobile ? mbLogo : logo} // Hiển thị logo khác nhau theo thiết bị
                    alt="logo image"
                    sx={{
                        width: isMobile ? "26px" : "229px", // Kích thước logo mobile nhỏ hơn
                        height: "26px",
                    }}
                />

                {/* Mobile Menu Icon */}
                {isMobile ? (
                    <>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={drawerOpen}
                            onClose={() => toggleDrawer(false)}
                        >
                            <Box
                                sx={{
                                    width: 250,
                                    display: "block",
                                    p: 2,
                                }}
                                role="presentation"
                                onClick={() => toggleDrawer(false)}
                            >
                                <List>
                                    {menuItems.map((item, index) => (
                                        <ListItem
                                            component="a"
                                            href={item.link}
                                            key={index}
                                            button
                                        >
                                            <ListItemText
                                                primary={item.name}
                                                primaryTypographyProps={{
                                                    fontSize: "16px",
                                                    fontWeight: 600,
                                                    color: "#2C2A29",
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                    <ListItem>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                width: "100%",
                                                borderColor: "#FF9900",
                                                color: "#FF9900",
                                            }}
                                        >
                                            Đăng ký
                                        </Button>
                                    </ListItem>
                                    <ListItem>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                width: "100%",
                                                backgroundColor: "#FF9900",
                                                color: "#fff",
                                            }}
                                        >
                                            Đăng nhập
                                        </Button>
                                    </ListItem>
                                </List>
                            </Box>
                        </Drawer>
                    </>
                ) : (
                    // Desktop and Tablet menu
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                        }}
                    >
                        {menuItems.map((item) => (
                            <Button
                                key={item.name}
                                href={item.link}
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    color: "#2C2A29",
                                    "&:hover": { color: "#FF9800" },
                                    textTransform: "none",
                                }}
                            >
                                {item.name}
                            </Button>
                        ))}

                        {/* Ẩn nút đăng ký & đăng nhập trên desktop và tablet */}
                        {!isMobile && (
                            <>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        display: "none", // Ẩn nút này
                                    }}
                                >
                                    Đăng ký
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        display: "none", // Ẩn nút này
                                    }}
                                >
                                    Đăng nhập
                                </Button>
                            </>
                        )}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
