import React from "react";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
} from "@mui/material";
import Style from "./create_text.module.css";
export const CreateTextForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    age: "",
    gender: "",
    additionalInfo: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <Card className="container">
          <div >Create Text & Media</div>
      <form onSubmit={handleSubmit}>
        <div className={Style.gridContainer}>
          <grid item className={Style.item1}>
            <InputLabel htmlFor="name">Heading 01</InputLabel>
            <FormControl fullWidth>
              <TextField
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Add heading that would make user interested"
                variant="outlined"
                fullWidth
              />
            </FormControl>
          </grid>
          <div item className={Style.item2}>
            <InputLabel htmlFor="additionalInfo">Description 01</InputLabel>
            <FormControl fullWidth>
              <TextField
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                placeholder="Add primary text to help users understand more about your products, services or offers
             "
                variant="outlined"
                fullWidth
                multiline
                rows={5}
              />
            </FormControl>
          </div>
          <div item className={Style.item3}>
            <InputLabel htmlFor="age">Heading 02</InputLabel>
            <FormControl fullWidth>
              <TextField
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Add a heading that would
              ereste"
                variant="outlined"
                fullWidth
              />
            </FormControl>
          </div>
          <div item className={Style.item4}>
            <InputLabel id="gender-label">Business Name</InputLabel>
            <FormControl fullWidth>
              <TextField
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Add your business name"
                variant="outlined"
                fullWidth
              />
            </FormControl>
          </div>
          <div item className={Style.item5}>
            <InputLabel id="gender-label">Button Label</InputLabel>
            <FormControl fullWidth>
              <Select
                id="gender"
                name="gender"
                labelId="gender-label"
                value={formData.gender}
                onChange={handleInputChange}
                label="Gender"
                variant="outlined"
                fullWidth
              >
                {/* <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem> */}
              </Select>
            </FormControl>
          </div>

          <div item className={Style.item6}>
            <InputLabel id="gender-label">Website URL</InputLabel>
            <FormControl fullWidth>
              <TextField
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Add the
              URL
              of the landina page you want to redirect users LC"
                variant="outlined"
                fullWidth
              />
            </FormControl>
          </div>

        </div>

        
      </form>
    </Card>
  );
};
