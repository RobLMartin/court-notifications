import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function SelectLanguage() {
  const { t, i18n } = useTranslation();
  const languages = [
    {
      value: "en",
      label: t("languages.english"),
    },
    {
      value: "es",
      label: t("languages.spanish"),
    },
    {
      value: "ru",
      label: t("languages.russian"),
    },
  ];
  const classes = useStyles();

  const handleChange = (event) => {
    const { value } = event.target;
    i18n.changeLanguage(value);
  };

  return (
    <Select
      onChange={handleChange}
      variant="standard"
      value={i18n.resolvedLanguage}
      sx={{ color: "white", width: "150px" }}
      className={classes.select}
      inputProps={{
        classes: classes,
      }}
    >
      {languages.map(({ label, value }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
}

const useStyles = makeStyles({
  select: {
    "&:before": {
      borderColor: "white",
    },
    "&:not(.Mui-disabled):hover::before": {
      borderColor: "white",
    },
  },
  icon: {
    fill: "white",
  },
  root: {
    color: "white",
  },
});
