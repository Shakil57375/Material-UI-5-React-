/* eslint-disable no-unused-vars */
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" marginBottom={10}>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Connect
        </Typography>
        <ConnectWithoutContactIcon
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        <Search>
          <InputBase placeholder="search"></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://i.ibb.co/HDQqVGz/65041c4e6f21544db8a4dfc2-Let-s-Venture.webp"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            alt="Remy Sharp"
            src="https://i.ibb.co/HDQqVGz/65041c4e6f21544db8a4dfc2-Let-s-Venture.webp"
          />
          <Typography variant="span">Remy</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
