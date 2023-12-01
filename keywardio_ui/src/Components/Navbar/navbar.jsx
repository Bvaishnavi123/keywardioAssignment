import { Card, Typography } from "@mui/material";
import Style from "./navbar.module.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

  const navigate = useNavigate()
  return (
    <div >
      <Card style={{marginBottom:"12px"}}>
        <div className={`flexboxClass ${Style.navbarContainer}`}>
          <h2>APP LOGO</h2>
          <div className={`flexboxClass ${Style.dashboardCreateADContainer}`}>
          <Typography variant="span" onClick={()=> navigate("/") } className="cursor fontWeight">
          DASHBOARD
        </Typography>
        <Typography variant="span" onClick={()=> navigate("/create-ads") } className="cursor fontWeight ">
        CREATE ADS
        </Typography>
           </div>
        </div>
      </Card>
    </div>
  );
};
