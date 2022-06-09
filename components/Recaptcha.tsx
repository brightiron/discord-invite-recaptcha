import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ReCAPTCHA from "react-google-recaptcha";

//Reload page when captcha is expired
const handleExpired = () => {
  window.location.reload();
};
const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
export const Recaptcha = (props: {
  onRecaptchaClick: (token: any) => Promise<void>;
}) => (
  <>
    <Box m={2}>
      <Typography>Are you human?</Typography>
    </Box>
    <Box mt={2}>
      <Box display="flex" pb={3} justifyContent="center">
        <ReCAPTCHA
          sitekey={siteKey}
          onChange={props.onRecaptchaClick}
          theme="dark"
          onExpired={handleExpired}
        />
      </Box>
    </Box>
  </>
);
