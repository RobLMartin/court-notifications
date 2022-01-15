import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBackToSearch = () => navigate("/search");
  const handleNavigateToSignUp = () => navigate("/sign-up");

  return (
    <>
      <SideBySide>
        <Button startIcon={<ChevronLeftIcon />} onClick={handleBackToSearch}>
          Back to search
        </Button>
      </SideBySide>
      <Typography gutterBottom variant="h4">
        {t("select.title")}
      </Typography>
      <Typography gutterBottom>{t("select.description")}</Typography>
      <Table sx={{ width: "900px" }}>
        <TableHead>
          <TableRow>
            <TableCell>Case #</TableCell>
            <TableCell align="right">
              {t("defendantsTable.columns.defendant")}
            </TableCell>
            <TableCell align="right">
              {t("defendantsTable.columns.birthDate")}
            </TableCell>
            <TableCell align="right">
              {t("defendantsTable.columns.numberOfCases")}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[{ defendant: "TEST", dob: "test", cases: [], caseNumber: 1 }].map(
            (row) => (
              <TableRow
                key={row.caseNumber}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Button onClick={handleNavigateToSignUp}>
                    {row.caseNumber}
                  </Button>
                </TableCell>
                <TableCell align="right">{row.defendant}</TableCell>
                <TableCell align="right">{row.dob}</TableCell>
                <TableCell align="right">{row.cases.length}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </>
  );
}

const SideBySide = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1em;
  margin-right: auto;
`;
