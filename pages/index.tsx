import { Grid, Box, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import { Title } from "../components/Title";
import { useState } from "react";
import { DiscordInvite } from "../components/DiscordInvite";
import { StyledContainer } from "../components/StyledContainer";
import { StyledPaper } from "../components/StyledPaper";
import { StyledBox } from "../components/StyledBox";
import { Recaptcha } from "../components/Recaptcha";

const Home: NextPage = () => {
  const [human, setHuman] = useState(false);

  const appName = process.env.NEXT_PUBLIC_APP_NAME || "";

  const handleRecaptchaClick = async (token: any) => {
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
    const { response } = await (await fetch(endpoint, options)).json();
    if (response === "success") {
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
            <StyledBox>
              <Box p={1} pt={4}>
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width="200px"
                  height="38px"
                  priority
                />
              </Box>
            </StyledBox>
            <Box m={2}>
              <Typography variant="h6">{appName} Discord Invite</Typography>
            </Box>
            <Recaptcha onRecaptchaClick={handleRecaptchaClick} />

            {human && <DiscordInvite onClick={handleDiscordLinkClick} />}
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Home;
