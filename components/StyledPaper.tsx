import { Paper, styled } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  minWidth: "400px",
  textAlign: "center",
  align: "center",
  boxShadow: `0px 0px 16px rgba(0, 0, 0, 0.35), 50px 50px 200px ${theme.palette.primary.main}, -50px -50px 200px ${theme.palette.secondary.main}`,
  borderRadius: "22px",
  paddingBottom: "20px",
}));
