import React, { useCallback,useEffect,useState } from "react"
import { Button, Typography } from "@chainsafe/common-components"
import { createStyles, makeStyles } from "@chainsafe/common-theme"
import { Trans } from "@lingui/macro"
import { useWeb3 } from "@chainsafe/web3-context"
import { CsBoilerTheme } from "../../Themes/types"

const useStyles = makeStyles(
  ({ constants, palette }: CsBoilerTheme) =>
    createStyles({
      root: {
        
      },
      button: {

      }
    })
)


const WalletConnectModule = () => {
  const {
    wallet,
    onboard,
    isReady,
    address,
    checkIsReady,
  } = useWeb3();

  const classes = useStyles()
  const maintenanceMode = process.env.REACT_APP_MAINTENANCE_MODE === "true"
  const [isConnecting] = useState(false)

  const [state, setState] = useState<"initial" | "selected" | "checked" | "connecting" | "connected">("initial")

  const checkReady = useCallback(async () => {
    await checkIsReady()
    setState("checked")
  }, [checkIsReady])

  const selectWallet = useCallback(async () => {
    const selected = await onboard?.walletSelect()
    if (selected) {
      checkReady()
    }

  }, [onboard, checkReady])

  const reset = useCallback(async () => {
    await onboard?.walletReset()
    setState("initial")
  }, [onboard])

  useEffect(() => {
    if (address) {
      checkReady()
    }
  }, [address, checkReady])
  
  console.log("address", address)
  console.log("isReady", isReady)
  console.log("address", address)
  console.log("address", address)

  return (
    <div className={classes.root}>
       <Button
        onClick={() => selectWallet()}
        className={classes.button}
        variant="primary"
        size="large"
        disabled={isConnecting || maintenanceMode}
      >
        {
          state === "initial" && (
            <Trans>Select wallet</Trans>
          )
        }
        {
          state === "checked" && (
            <Trans>Use a different login method</Trans>
          )
        }
      </Button>
     
      {
        state !== "initial" && (
          <Button
            onClick={() => reset()}
            className={classes.button}
            variant="primary"
            size="large"
            disabled={isConnecting || maintenanceMode}
          >
            <Trans>Disconnect</Trans>
          </Button>
        
        )
      }
      {
        wallet && isReady && address && (
          <section>
            <Typography component="p">
              Address: {address}
            </Typography>
            <Typography component="p">
              Wallet name: {wallet.name}
            </Typography>
            <Typography component="p">
              Wallet type: {wallet.type}
            </Typography>
          </section>
        )
      }
    </div>
  )
}

export default WalletConnectModule
