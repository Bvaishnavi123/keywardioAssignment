import { useEffect, useState } from "react";
import Style from "./create_mediaForm.module.css";
import React from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  Card,
  Typography,
} from "@mui/material";
import ModalUnstyled from "../../Components/Modal/modal.jsx";
import { useNavigate } from "react-router-dom";
export const MediaFormCmp = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    heading01: "",
    description01: "",
    heading02: "",
    landscapeImg: "",
    portraitImg: "",
    squareImg: "",
    videoUrl: "",
    businessName: "",
    buttonlabel: "",
    websiteurl: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    let timeout;

    if (open) {
      timeout = setTimeout(() => {
        setOpen(false);
        navigate("/create-ads");
      }, 600);
    }

    return () => clearTimeout(timeout);
  }, [open]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:");
    setOpen(true);
  };

  return (
    <>
      <ModalUnstyled open={open} setOpen={setOpen} />
      <Card className="container">
        <Typography variant="span" className="fontWeight ">
          Create Text & Media{" "}
        </Typography>
        <form onSubmit={handleSubmit}>
          <div className={Style.gridContainer}>
            <div item className={Style.item1}>
              <InputLabel htmlFor="heading01">Heading 01</InputLabel>
              <FormControl fullWidth>
                <TextField
                  id="heading01"
                  name="heading01"
                  value={formData.heading01}
                  onChange={handleInputChange}
                  placeholder="Add heading that would make user interested"
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{
                    style: { fontSize: '14px' } 
                  }}
                />
              </FormControl>
            </div>
            <div item className={Style.item2}>
              <InputLabel htmlFor="description01">Description 01</InputLabel>
              <FormControl fullWidth>
                <TextField
                  id="description01"
                  name="description01"
                  value={formData.description01}
                  onChange={handleInputChange}
                  placeholder="Add primary text to help users understand more about your products, services or offers
               "
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={5}
                  size="small"
                  inputProps={{
                    style: { fontSize: '14px' } 
                  }}
                />
              </FormControl>
            </div>
            <div item className={Style.item3}>
              <InputLabel htmlFor="heading02">Heading 02</InputLabel>
              <FormControl fullWidth>
                <TextField
                  id="heading02"
                  name="heading02"
                  value={formData.heading02}
                  onChange={handleInputChange}
                  placeholder="Add a heading that would
                ereste"
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{
                    style: { fontSize: '14px' } 
                  }}
                />
              </FormControl>
            </div>
            <div item className={Style.item4}>
              <InputLabel id="landscapeImg">
                Landscape Marketing Image (1.9:1)
              </InputLabel>
              <FormControl fullWidth>
                <TextField
                  id="landscapeImg"
                  name="landscapeImg"
                  value={formData.landscapeImg}
                  onChange={handleInputChange}
                  placeholder="Add the URL of the Image you want to use for the ad"
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{
                    style: { fontSize: '14px' } 
                  }}
                />
              </FormControl>
            </div>

            <div item className={Style.item5}>
              <InputLabel id="portraitImg">
                Portrait Marketing Image (4:5)
              </InputLabel>
              <FormControl fullWidth>
                <TextField
                  id="portraitImg"
                  name="portraitImg"
                  value={formData.portraitImg}
                  onChange={handleInputChange}
                  placeholder="Add the URL of the Image you want to use for the ad"
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{
                    style: { fontSize: '14px' } 
                  }}
                />
              </FormControl>
            </div>

            <div item className={Style.item6}>
              <InputLabel id="squareImg">
                Square Marketing Image (1:1)
              </InputLabel>
              <FormControl fullWidth>
                <TextField
                  id="squareImg"
                  name="squareImg"
                  value={formData.squareImg}
                  onChange={handleInputChange}
                  placeholder="Add the URL of the Image you want to use for the ad"
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{
                    style: { fontSize: '14px' } 
                  }}
                />
              </FormControl>
            </div>
            <div item className={Style.item7}>
              <InputLabel id="videoUrl">Video URL</InputLabel>
              <FormControl fullWidth>
                <TextField
                  id="videoUrl"
                  name="videoUrl"
                  value={formData.videoUrl}
                  onChange={handleInputChange}
                  placeholder="Add the URL of the video you want to use for the ad"
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{
                    style: { fontSize: '14px' } 
                  }}
                />
              </FormControl>
            </div>
            <div item className={Style.item8}>
              <InputLabel id="businessName">Business Name</InputLabel>
              <FormControl fullWidth>
                <TextField
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Add your business name"
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{
                    style: { fontSize: '14px' } 
                  }}
                />
              </FormControl>
            </div>
            <div item className={Style.item9}>
              <InputLabel id="buttonlabel">Button Label</InputLabel>
              <FormControl fullWidth>
                <Select
                  id="buttonlabel"
                  name="buttonlabel"
                  labelId="buttonlabel"
                  value={formData.buttonlabel}
                  onChange={handleInputChange}
                  label="Gender"
                  placeholder="Select a label that that best suits your ad"
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{
                    style: { fontSize: '14px' } 
                  }}
                ></Select>
              </FormControl>
            </div>
            <div item className={Style.item10}>
              <InputLabel id="websiteurl">Website URL</InputLabel>
              <FormControl fullWidth>
                <TextField
                  id="websiteurl"
                  name="websiteurl"
                  value={formData.websiteurl}
                  onChange={handleInputChange}
                  placeholder="Add the URL of the landina page you want to redirect users LC"
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{
                    style: { fontSize: '14px' } 
                  }}
                />
              </FormControl>
            </div>
          </div>
          <div className="flexboxClass buttonContainer" style={{ gap: "5px" }}>
            <Button variant="outlined" onClick={() => navigate("/create-ads")} sx={{width:"48%"}}>
              Back
            </Button>
            <Button variant="contained" type="submit" sx={{width:"48%"}}>
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
};
