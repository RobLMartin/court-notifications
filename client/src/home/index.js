import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigateToSearch = () => navigate("/search");
  const handleNavigateToTips = () => navigate("/tips");

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Court Notifications
      </Typography>
      <Content>
        <Typography gutterBottom variant="body1" sx={{ lineHeight: 1.9 }}>
          {t("intro.description.paragraph1")}
        </Typography>
        <Typography gutterBottom variant="body1" sx={{ lineHeight: 1.9 }}>
          {t("intro.description.paragraph2")}
        </Typography>
      </Content>
      <AlignRight>
        <Button onClick={handleNavigateToTips}>Info</Button>
        <Button
          variant="contained"
          endIcon={<ChevronRightIcon />}
          onClick={handleNavigateToSearch}
        >
          Search
        </Button>
      </AlignRight>
    </>
  );
}

const Content = styled.div`
  display: grid;
  padding-right: 1em;
  gap: 1em;
`;

const AlignRight = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1em;
  justify-content: right;
  margin-top: 1em;
`;
