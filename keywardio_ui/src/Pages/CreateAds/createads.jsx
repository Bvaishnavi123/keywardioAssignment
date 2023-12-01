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
import { useNavigate } from "react-router-dom";

export const CreateAds = () => {
  const [textAdChecked, setTextAdChecked] = useState(false);
  const [mediaAdChecked, setMediaAdChecked] = useState(false);
  const navigate = useNavigate()

  const handleTextAdCheck = () => {
    setTextAdChecked(!textAdChecked);
  };

  const handleMediaAdCheck = () => {
    
    setMediaAdChecked(!mediaAdChecked);
   
  };

  const handleNextClick = ()=>{
    if(textAdChecked && !mediaAdChecked){
     
      navigate("/create-text-form")
    }
    else if((!textAdChecked && mediaAdChecked) || (textAdChecked && mediaAdChecked)){
      navigate("/create-media-form")
    }

   
  }

  return (
    <Card className="container">
      <Typography variant="span" className="fontWeight ">
        CREATE ADS
        </Typography>

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
            <Typography variant="h5" className="fontWeight">
              Text Ad
            </Typography>
          </div>
        </Paper>
        <Paper elevation={3} className={Styles.subCard} onClick={handleMediaAdCheck}>
          <div style={{ padding: "10px" }}>
            <FormControlLabel control={<Checkbox checked={mediaAdChecked} />} />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ivSQzXnq4B-W8cJy8egS_lfiji_Si3eYtP5ujroisLncNVsPd0kA2Ttr83XM6pAj3qU&usqp=CAU"
              className={Styles.imgContainer}
            />
          </div>
          <div className={Styles.createAddContainer}>
            <p>Create</p>
            <Typography variant="h5"className="fontWeight">
              Media Ad
            </Typography>
          </div>
        </Paper>
      </div>

      <div className="buttonContainer">
        <Button variant="contained" onClick={handleNextClick}>Next</Button>
      </div>
    </Card>
  );
};
