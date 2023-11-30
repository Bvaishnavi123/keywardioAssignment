import React, { useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Paper,
  Typography,
} from "@mui/material";
import Styles from "./createads.module.css";

export const CreateAds = () => {
  const [textAdChecked, setTextAdChecked] = useState(false);
  const [mediaAdChecked, setMediaAdChecked] = useState(false);

  const handleTextAdCheck = () => {
    setTextAdChecked(!textAdChecked);
  };

  const handleMediaAdCheck = () => {
    setMediaAdChecked(!mediaAdChecked);
  };

  return (
    <Card className="container">
      <div>Create Ads</div>
      <div className={`flexboxClass ${Styles.subCardContainer}`}>
        <Paper elevation={3} className={Styles.subCard} onClick={handleTextAdCheck}>
          <div style={{ padding: "10px" }}>
            <FormControlLabel control={<Checkbox checked={textAdChecked} />} />

            <img
              src="https://searchenginehubbub.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-17-at-19.55.33.png"
              className={Styles.imgContainer}
            />
          </div>
          <div className={Styles.createAddContainer}>
            <p>Create</p>
            <Typography variant="h6" style={{ fontWeight: "200" }}>
              Text Ad
            </Typography>
          </div>
        </Paper>
        <Paper elevation={3} className={Styles.subCard} onClick={handleMediaAdCheck}>
          <div style={{ padding: "10px" }}>
            <FormControlLabel control={<Checkbox checked={mediaAdChecked} />} />

            <img
              src="https://marketingweek.imgix.net/content/uploads/2015/09/24095454/facebook-360-video-e1471534875125.png?auto=compress,format&q=60&w=736&h=450"
              className={Styles.imgContainer}
            />
          </div>
          <div className={Styles.createAddContainer}>
            <p>Create</p>
            <Typography variant="h6" style={{ fontWeight: "200" }}>
              Media Ad
            </Typography>
          </div>
        </Paper>
      </div>

      <div className={Styles.buttonContainer}>
        <Button variant="contained">Next</Button>
      </div>
    </Card>
  );
};
