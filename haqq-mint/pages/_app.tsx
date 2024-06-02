import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";

// Import the Base Mainnet configuration from Thirdweb SDK
import { Base } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
const activeChain = BaseMainnet;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
      activeChain={activeChain}
      clientId={process.env.TW_API_KEY}
    >
      <Head>
        <title>Welcome To ATL5D</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Using Base Mainnet and Thirdweb's Edition Drop contract to create customizable Edition Drop minting page"
        />
        <meta
          name="keywords"
          content="Base Mainnet, Thirdweb, thirdweb Edition drop, how to make thirdweb nft drop, how to make nft collection thirdweb"
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
