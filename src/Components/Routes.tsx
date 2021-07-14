import React from "react"
import { Switch, ConditionalRoute } from "@chainsafe/common-components"
import LandingPage from "./Pages/LandingPage"

export const ROUTE_LINKS = {
  Landing: "/",
}

const Routes = () => {

 
  return (
    <Switch>
      <ConditionalRoute
        exact
        path={ROUTE_LINKS.Landing}
        isAuthorized={true}
        component={LandingPage}
        redirectPath={ROUTE_LINKS.Landing}
      />
    </Switch>
  )
}

export default Routes
