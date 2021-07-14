import React, { useState } from "react"
import { Button, Typography } from "@chainsafe/common-components"
import { createStyles, makeStyles, useThemeSwitcher } from "@chainsafe/common-theme"
import { Trans } from "@lingui/macro"
import { useWeb3 } from "@chainsafe/web3-context"
import clsx from "clsx"
import { CsBoilerTheme } from "../../../Themes/types"

const useStyles = makeStyles(
  ({ constants, palette, breakpoints, typography }: CsBoilerTheme) =>
    createStyles({
      root: {
    
      },
      buttonSection: {
      },
      connectingWallet: {
        textAlign: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        "& > *": {
          fontWeight: 400
        },
        [breakpoints.up("md")]: {
          padding: `${constants.generalUnit * 30}px ${constants.generalUnit * 8}px`,
          "& > *": {
            paddingBottom: `${constants.generalUnit * 5}px`
          }
        },
        [breakpoints.down("md")]: {
          justifyContent: "space-evenly"
        }
      },
      button: {
        width: 240,
        fontWeight: typography.fontWeight.medium,
        marginBottom: constants.generalUnit * 2,
        "& .icon" : {
          fontSize: 25
        },
        "&:last-child": {
          marginBottom: 0
        }
      },
      error: {
        color: palette.error.main,
        paddingBottom: constants.generalUnit * 2,
        maxWidth: 240
      },
      headerText: {
        [breakpoints.up("md")]: {
          paddingTop: constants.generalUnit * 4,
          paddingBottom: constants.generalUnit * 8
        },
        [breakpoints.down("md")]: {
          paddingTop: constants.generalUnit * 3,
          paddingBottom: constants.generalUnit * 3,
          textAlign: "center"
        }
      },
      connectWalletFooter: {
        padding: `${constants.generalUnit * 4.375}px ${constants.generalUnit * 7}px`,
        width: "100%",
        textAlign: "center",
        "& > *": {
          fontWeight: 400
        },
        [breakpoints.down("md")]: {
          display: "none"
        }
      },
      loader: {
        marginTop: constants.generalUnit,
        padding: 0
      },
      buttonLink: {
        color: palette.additional["gray"][10],
        outline: "none",
        textDecoration: "underline",
        cursor: "pointer",
        textAlign: "center"
      },
      web3Button: {
        minHeight: 41
      }
    })
)

interface IInitialScreen {
  className?: string
}

const LoginModule = ({ className }: IInitialScreen) => {
  const {
    wallet,
    onboard
  } = useWeb3();

  const { desktop } = useThemeSwitcher()
  const classes = useStyles()
  const [loginMode, setLoginMode] = useState<"web3" | undefined>()
  const [error, setError] = useState<string | undefined>()
  const maintenanceMode = process.env.REACT_APP_MAINTENANCE_MODE === "true"
  const [isConnecting] = useState(false)

  const resetLogin = async () => {
    setError(undefined)
    setLoginMode(undefined)
  }

  const ConnectWallet = () => {
    if (!wallet) {
      console.error("No wallet found")
      return null
    }

    return (
      <div>
        <section className={classes.buttonSection}>
          <Button
            data-cy="sign-in-with-web3-button"
            onClick={() => onboard?.walletSelect()}
            className={classes.button}
            variant="primary"
            size="large"
            disabled={maintenanceMode}
          >
            <Trans>Sign-in with {wallet.name}</Trans>
          </Button>
          <Button
            onClick={() => {
              onboard?.walletReset()
              onboard?.walletSelect()
            }}
            className={classes.button}
            variant="primary"
            size="large"
            disabled={maintenanceMode}
          >
            <Trans>Connect a new wallet</Trans>
          </Button>
          <div
            className={classes.buttonLink}
            onClick={resetLogin}
          >
            <Typography>
              <Trans>Go back</Trans>
            </Typography>
          </div>
        </section>
      </div>
    )}

  const WalletConnection = () => {
    return (
      <section className={classes.connectingWallet}>
        <Typography variant='h2'><Trans>Connect Wallet to Storage</Trans></Typography>
        {/* {status === "awaiting confirmation" &&
          <Typography variant='h5'>
            <Trans>You will need to sign a message in your wallet to complete sign in.</Trans>
          </Typography>}
        {status === "logging in" && <>
          <Typography variant='h5'>
            <Trans>Hold on, we are logging you in…</Trans>
          </Typography>
          <Loading
            className={classes.loader}
            size={50}
            type='inherit'
          />
        </>} */}
      </section>
    )
  }

  const WalletSelection = () => {
    return (
      <>
        <section className={classes.buttonSection}>
          <Button
            onClick={() => {
              onboard?.walletReset()
              onboard?.walletSelect()
            }}
            className={classes.button}
            variant="primary"
            size="large"
            disabled={maintenanceMode}
          >
            <Trans>Select a wallet</Trans>
          </Button>
          <Button
            onClick={() => setLoginMode(undefined)}
            className={classes.button}
            variant="primary"
            size="large"
            disabled={maintenanceMode}
          >
            <Trans>Use a different login method</Trans>
          </Button>
        </section>
      </>
    )
  }
  return (
    <div className={clsx(classes.root, className)}>
      {((desktop && !isConnecting && !error) || (isConnecting && loginMode !== "web3")) && (
        <Typography
          variant="h6"
          component="h1"
          className={classes.headerText}
        >
          <Trans>Get Started</Trans>
        </Typography>
      )}
      {!error && (
        loginMode !== "web3"
          ? <>
            <section className={classes.buttonSection}>
              {maintenanceMode && (
                <Typography>
                  <Trans>The system is undergoing maintenance, thank you for being patient.</Trans>
                </Typography>
              )}
              <Button
                data-cy="web3"
                onClick={() => {
                  onboard?.walletSelect()
                }}
                className={clsx(classes.button, classes.web3Button)}
                variant="primary"
                size="large"
                disabled={maintenanceMode || isConnecting}
                // disabled={maintenanceMode || isConnecting || status !== "initialized"}
              >
                <Trans>Continue with Web3 Wallet</Trans>
              </Button>
            </section>
          </>
            : wallet
              ? !isConnecting
                ? <ConnectWallet />
                : <WalletConnection />
              : <WalletSelection />
      )}
      {!!error && (
        <>
          <section className={classes.connectingWallet}>
            <Typography variant='h2'>
              <Trans>Connection failed</Trans>
            </Typography>
            <Typography variant='h5'>
              {error}
            </Typography>
            <Button
              variant="primary"
              onClick={resetLogin}
            >
              <Trans>Try again</Trans>
            </Button>
          </section>
        </>
      )}
    </div>
  )
}

export default LoginModule
