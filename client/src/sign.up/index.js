import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import TextField from "@mui/material/TextField";

export default function SignUp() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleReturnToCase = () => navigate("/case-list/123");

  return (
    <>
      <SideBySide>
        <Button startIcon={<ChevronLeftIcon />} onClick={handleReturnToCase}>
          Return
        </Button>
      </SideBySide>
      <Typography gutterBottom variant="h4">
        {t("signup.title")}
      </Typography>

      <Typography gutterBottom>{t("signup.description")}</Typography>

      <SideBySide>
        <TextField label={t("signup.fields.phoneNumber")} type="phone" />
        <Button variant="contained">{t("signup.button")}</Button>
      </SideBySide>
    </>
  );
}

const SideBySide = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1em;
  margin-right: auto;
`;
