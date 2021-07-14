import { createTheme } from "@chainsafe/common-theme"
import { CsBoilerColors, UI_CONSTANTS } from "./Constants"

export const lightTheme = createTheme<CsBoilerColors>({
  globalStyling: {
    ":root": {
      "--csf-primary": "#5165DC"
    }
  },
  themeConfig: {
    palette: {
      primary: {
        main: "var(--csf-primary)"
      },
      secondary: {
      }
    },
    constants: {
      ...UI_CONSTANTS,
      ...({} as CsBoilerColors)
    },
    overrides: {
    }
  }
})
