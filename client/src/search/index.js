import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Search() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigateToCaseList = () => navigate("/case-list/123");

  return (
    <>
      <Typography gutterBottom variant="h4">
        {t("search.title")}
      </Typography>
      <Typography gutterBottom>{t("search.description")}</Typography>
      <Content>
        <TextField label={t("search.inputfields.firstName")} />
        <TextField label={t("search.inputfields.middleName")} />
        <TextField label={t("search.inputfields.lastName")} />
        <AlignRight>
          <Button variant="contained" onClick={handleNavigateToCaseList}>
            Search
          </Button>
        </AlignRight>
      </Content>
    </>
  );
}

const AlignRight = styled.div`
  display: grid;
  justify-content: right;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 1em;
`;
