import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";

export const Header = (props: { children: ReactElement }) => {
  return <Box p={1} pt={4}>{props.children}</Box>;
};
