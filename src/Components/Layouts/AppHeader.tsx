import React from "react"
import { createStyles, makeStyles } from "@chainsafe/common-theme"
import clsx from "clsx"
import {
  Typography,
} from "@chainsafe/common-components"
import { CsBoilerTheme } from "../../Themes/types"

const useStyles = makeStyles(
  ({ constants }: CsBoilerTheme) => {
    return createStyles({
      root: {
        display: "flex",
        padding: `${constants.generalUnit}px ${constants.generalUnit * 2}px`
      },
    })
  }
)

const AppHeader = () => {
  const classes = useStyles()

  return (
    <header
      className={clsx(classes.root)}
    >
      <Typography component="h1" variant="h2">
        ChainSafe DApp template app
      </Typography>
    </header>
  )
}

export default AppHeader
