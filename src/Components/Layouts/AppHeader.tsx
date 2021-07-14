import React from "react"
import { createStyles, makeStyles } from "@chainsafe/common-theme"
import clsx from "clsx"
import {
  Typography,
} from "@chainsafe/common-components"

const useStyles = makeStyles(
  () => {
    return createStyles({
      root: {
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
      <Typography>
        Header
      </Typography>
    </header>
  )
}

export default AppHeader
