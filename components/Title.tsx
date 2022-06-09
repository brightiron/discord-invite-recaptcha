import { ReactElement, ReactNode } from "react";
import { Typography, Box } from "@mui/material";

export const Title = (props: { children: ReactNode | ReactElement }) => {
  return (
    <Box>
      <Typography
        style={{ whiteSpace: "pre-line" }}
        variant="h6"
      >
        {props.children}
      </Typography>
    </Box>
  );
};
