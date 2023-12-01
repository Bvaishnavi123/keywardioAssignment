import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  Card,
  Typography,
} from "@mui/material";
import Style from "./create_text.module.css";
import ModalUnstyled from "../../Components/Modal/modal.jsx";
import { useNavigate } from "react-router-dom";
export const CreateTextForm = () => {
  const [formData, setFormData] = useState({
    heading01:"",
    description01:"",
    heading02:"",
    businessName:"",
    buttonLabel:"",
    websiteURL:""
  });
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    let timeout;

    if (open) {
      timeout = setTimeout(() => {
        setOpen(false);
        navigate('/create-ads')
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
    // Handle form submission logic here
    console.log("Form submitted:",formData);
    setOpen(true)
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
                  value={formData.d}
                  onChange={handleInputChange}
                  placeholder="Add primary text to help users understand more about your products, services or offers"
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
            <div item className={Style.item5}>
              <InputLabel id="buttonLabel">Button Label</InputLabel>
              <FormControl fullWidth>
                <Select
                  id="buttonLabel"
                  name="buttonLabel"
                  labelId="buttonLabel"
                  value={formData.buttonLabel}
                  onChange={handleInputChange}
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{
                    style: { fontSize: '14px' } 
                  }}
                >
                  {/* <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem> */}
                </Select>
              </FormControl>
            </div>

            <div item className={Style.item6}>
              <InputLabel id="websiteURL">Website URL</InputLabel>
              <FormControl fullWidth>
                <TextField
                  id="websiteURL"
                  name="websiteURL"
                  type="URL"
                  value={formData.websiteURL}
                  onChange={handleInputChange}
                  placeholder="Add the
              URL
              of the landina page you want to redirect users LC"
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
          <div className="flexboxClass buttonContainer" style={{ gap: "10px" }}>
            <Button variant="outlined" onClick={()=>navigate('/create-ads')}>Back</Button>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
};
