import { LocationCity } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton, Stack, Theme, Tooltip, useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { memo, useState } from "react";
import Navigator from "./Navigator";

function Navbar() {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);

    const theme = useTheme<Theme>();
    const bigScreen = useMediaQuery(theme.breakpoints.up("md"));

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            elevation={0}
            position="static"
            sx={{
                top: "auto",
                background: "transparent",
                boxShadow: 3,
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between", alignContent: "center" }}>
                <Stack direction="row" alignItems="center">
                    <LocationCity
                        fontSize="large"
                        sx={{
                            mr: 0,
                            color: "#fff",
                        }}
                    />
                    <Link href="/">
                        <Typography
                            component={Button}
                            disableRipple={true}
                            textTransform="none"
                            variant="h6"
                            sx={{
                                color: "#fff",
                            }}
                        >
                            Chełmscy Emeryci SW
                        </Typography>
                    </Link>
                </Stack>

                {bigScreen ? (
                    <Navigator closeMenu={handleCloseMenu} menu={false} />
                ) : (
                    <Box>
                        <Tooltip title="Nawigator">
                            <IconButton
                                id="demo-positioned-button"
                                aria-expanded={open ? "true" : undefined}
                                aria-controls={open ? "demo-positioned-menu" : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleCloseMenu}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                        >
                            <Navigator closeMenu={handleCloseMenu} menu={true} />
                        </Menu>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default memo(Navbar);
