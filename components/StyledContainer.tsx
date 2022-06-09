import { Container, styled } from "@mui/system";

export const StyledContainer = styled(Container)(() => ({
  justifyContent: "center",
  alignItems: "center",
  spacing: 2,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
}));
