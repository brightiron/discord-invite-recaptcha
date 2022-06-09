import { Grid, Box } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import { Header } from "../components/Header";
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
    const response = await fetch(endpoint, options);
    const result = await response.json();
    console.log("Captcha server-sided validation: ", result["response"]);
    if (result["response"] === "Successful") {
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
    console.log(response, "response");
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
              <Header>
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width="200px"
                  height="38px"
                  priority
                />
              </Header>
            </StyledBox>
            <Box m={2}>
              <Title>{appName} Discord Invite</Title>
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
