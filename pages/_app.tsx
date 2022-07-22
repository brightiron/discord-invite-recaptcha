import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme/config";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "../lib/ga";
import Script from "next/script";

function DiscordInviteApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Discord Invite</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
      </Head>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="ga"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default DiscordInviteApp;
