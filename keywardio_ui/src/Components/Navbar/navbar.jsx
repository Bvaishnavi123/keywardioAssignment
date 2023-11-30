import { Typography } from "@mui/material";
import OutlinedCard from "../Card/card.jsx";
import Style from "./navbar.module.css";

export const Navbar = () => {
  return (
    <div >
      <OutlinedCard>
        <div className={`flexboxClass ${Style.navbarContainer}`}>
          <h4>APP LOGO</h4>
          <div className={`flexboxClass ${Style.dashboardCreateADContainer}`}>
          <Typography variant="subtitle1">
          DASHBOARD
        </Typography>
        <Typography variant="subtitle1">
        CREATE ADS
        </Typography>
           </div>
        </div>
      </OutlinedCard>
    </div>
  );
};
