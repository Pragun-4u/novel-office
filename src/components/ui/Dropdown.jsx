import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Dropdown({ label = "", name, options = [] }) {
  const [data, setData] = React.useState("");

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <Box sx={{ width: { xs: "100%", md: "20%" } }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data}
          label={label}
          name={name}
          onChange={handleChange}
          required
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option?.value}>
              {option?.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
