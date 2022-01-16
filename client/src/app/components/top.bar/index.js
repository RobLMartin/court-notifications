import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SelectLanguage from "./select.language";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import CottageIcon from "@mui/icons-material/Cottage";

export default function TopBar() {
  const navigate = useNavigate();

  const handleNavigateHome = () => navigate("/");

  return (
    <Nav>
      <div>
        <ListItemButton
          sx={{
            width: "fit-content",
            display: "grid",
            gridGap: "1em",
            gridTemplateColumns: "auto auto",
            height: "64px",
          }}
        >
          <IconButton onClick={handleNavigateHome}>
            <CottageIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography variant="overline">Court Notifications</Typography>
        </ListItemButton>
      </div>
      <div>
        <SelectLanguage />
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  grid-area: topbar;
  height: 64px;
  width: 100vw;
  background: #161f2d;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding-right: 1em;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
