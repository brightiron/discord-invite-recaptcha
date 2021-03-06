import { Grid, Box, Typography, CircularProgress } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { DiscordInvite } from "../components/DiscordInvite";
import { StyledContainer } from "../components/StyledContainer";
import { StyledPaper } from "../components/StyledPaper";
import { Recaptcha } from "../components/Recaptcha";
import * as ga from "../lib/ga";

const Home: NextPage = () => {
  const [human, setHuman] = useState(false);
  const [loading, setLoading] = useState(false);
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "";

  const handleRecaptchaClick = async (token: any) => {
    setLoading(true);
    const endpoint = "/api/verify";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
      }),
    };
    ga.event({
      action: "solveRecaptcha",
      params: {
        event: "click",
      },
    });
    const { response } = await (await fetch(endpoint, options)).json();
    if (response === "success") {
      setLoading(false);
      setHuman(true);
    }
  };

  const handleDiscordLinkClick = async () => {
    const endpoint = "/api/discord";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    };
    ga.event({
      action: "joinDiscord",
      params: {
        event: "click",
      },
    });
    const { response } = await (await fetch(endpoint, options)).json();
    if (response.code) {
      window.location.href = "https://discord.gg/" + response.code;
    }
  };

  return (
    <StyledContainer>
      <Grid container display="flex" direction="column" alignItems="center">
        <Grid item>
          <StyledPaper elevation={3}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Box p={1} pt={4}>
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width="200px"
                  height="38px"
                  priority
                />
              </Box>
            </Box>
            <Box m={2}>
              <Typography variant="h6">{appName} Discord Invite</Typography>
            </Box>
            <Recaptcha onRecaptchaClick={handleRecaptchaClick} />
            {loading && (
              <Box m={2}>
                <CircularProgress />
              </Box>
            )}
            {human && <DiscordInvite onClick={handleDiscordLinkClick} />}
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Home;
