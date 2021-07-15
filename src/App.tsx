import React from "react"
import { Web3Provider } from "@chainsafe/web3-context"
import { ThemeSwitcher } from "@chainsafe/common-theme"
import "@chainsafe/common-theme/dist/font-faces.css"
import { CssBaseline, Router, ToasterProvider } from "@chainsafe/common-components"
import Routes from "./Components/Routes"
import AppWrapper from "./Components/Layouts/AppWrapper"
import { lightTheme } from "./Themes/LightTheme"
import { useLocalStorage } from "@chainsafe/browser-storage-hooks"
import { LanguageProvider } from "./Contexts/LanguageContext"
import { DataProvider } from "./Contexts/DataContext"

const availableLanguages = [
  { id: "en", label: "English" },
]

const onboardConfig = {
  dappId: process.env.REACT_APP_BLOCKNATIVE_ID || "",
  walletSelect: {
    wallets: [
      { walletName: "coinbase" },
      {
        walletName: "trust",
        rpcUrl:
          `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
      },
      { walletName: "metamask", preferred: true },
      { walletName: "authereum" },
      { walletName: "opera" },
      { walletName: "operaTouch" },
      { walletName: "torus" },
      { walletName: "status" },
      {
        walletName: "walletConnect",
        infuraKey: process.env.INFURA_PROJECT_ID,
        preferred: true
      }
    ]
  }
}

const App = () => {
  const { canUseLocalStorage } = useLocalStorage()

  return (
    <ThemeSwitcher
      storageKey="csbp.themeKey"
      themes={{ light: lightTheme }}
    >
      <CssBaseline />
      <LanguageProvider availableLanguages={availableLanguages}>
        <ToasterProvider autoDismiss>
          <Web3Provider
            onboardConfig={onboardConfig}
            checkNetwork={false}
            cacheWalletSelection={canUseLocalStorage}
          >
            <DataProvider>
              <Router>
                <AppWrapper>
                  <Routes />
                </AppWrapper>
              </Router>
            </DataProvider>
          </Web3Provider>
        </ToasterProvider>
      </LanguageProvider>
    </ThemeSwitcher>
  )
}

export default App
