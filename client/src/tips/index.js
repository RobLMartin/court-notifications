import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Paper } from "../app/components";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";

export default function Tips() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigateToHome = () => navigate("/");
  return (
    <Paper>
      <SideBySide>
        <Button startIcon={<ChevronLeftIcon />} onClick={handleNavigateToHome}>
          Return Home
        </Button>
      </SideBySide>
      <Typography gutterBottom variant="h4">
        Tips
      </Typography>

      <Typography gutterBottom>{t("courtguide.intro")}</Typography>
      <List sx={{ maxWidth: "700px" }}>
        <ListItem>
          <Checkbox checked />{" "}
          <ListItemText>{t("courtguide.item1")}</ListItemText>
        </ListItem>
        <ListItem>
          <Checkbox checked />{" "}
          <ListItemText>{t("courtguide.item2")}</ListItemText>
        </ListItem>
        <ListItem>
          <Checkbox checked />{" "}
          <ListItemText>{t("courtguide.item3")}</ListItemText>
        </ListItem>
        <ListItem>
          <Checkbox checked />{" "}
          <ListItemText>{t("courtguide.item4")}</ListItemText>
        </ListItem>
        <ListItem>
          <Checkbox checked />{" "}
          <ListItemText>{t("courtguide.item5")}</ListItemText>
        </ListItem>
        <ListItem>
          <Checkbox checked />{" "}
          <ListItemText>{t("courtguide.item6")}</ListItemText>
        </ListItem>
      </List>
      <Alert severity="warning">{t("courtguide.if-miss")}</Alert>
      <Alert severity="info">
        <List>
          <ListItem>{t("courtguide.pd-phone")}</ListItem>
          <ListItem>{t("courtguide.da-phone")}</ListItem>
          <ListItem>{t("courtguide.clerk-phone")}</ListItem>
        </List>
      </Alert>
    </Paper>
  );
}

const SideBySide = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1em;
  margin-right: auto;
`;
