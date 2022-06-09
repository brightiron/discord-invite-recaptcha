import { Box, Button, Typography } from "@mui/material";

export const DiscordInvite = (props: { onClick: () => void }) => (
  <Box pt={3}>
    <Button
      variant="contained"
      size="large"
      disableElevation
      onClick={props.onClick}
    >
      Join Discord
    </Button>
    <Typography variant="subtitle2" pt={2}>
      Discord invite is single use and expires
    </Typography>
  </Box>
);
