import { AppBar, Box, Link, Toolbar } from "@mui/material";
import { FC } from "react";
import Logo from "../svgs/Logo";

const NavBar: FC = () => {
  const navLinks: NavLink[] = [
    { name: "Discover Ello", path: "https://www.ello.com/#how-it-works" },
    {
      name: "Parent Resources",
      path: "https://www.ello.com/blog",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, position: "sticky", top: 0, zIndex: 1000 }}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "var(--white)",
          boxShadow: "none",
          py: "5px",
        }}
        position="sticky"
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Logo />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navLinks.map((item: NavLink) => (
              <Link
                href={item.path}
                underline="none"
                sx={{
                  color: "var(--steel-blue)",
                  textTransform: "capitalize",
                  fontSize: "18px",
                  fontWeight: "600",
                  padding: "10px",
                  marginRight: "28px",
                }}
                color="inherit"
              >
                {item.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
