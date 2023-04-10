import React from "react";
import {Box, Button, Select, MenuItem } from '@mui/material';
import makeStyles from "@mui/styled-engine-sc";

const useState = makeStyles({
    wrapper: {
        border: '1px solid red'
    }
})

export default (props) => {
    <Box>
        <Select variant="filled" defaultValue='FullTime'>
            <MenuItem value='FullTime' >Full Time</MenuItem>
            <MenuItem value='parttime'>Part Time</MenuItem>
            <MenuItem value='internship'>Internship</MenuItem>
        </Select>
        <Select variant="filled" defaultValue='Remote'>
            <MenuItem value='Remote' >Remote</MenuItem>
            <MenuItem value='In-office'>In-office</MenuItem>
           
        </Select>
        <Button variant='contained' color='primary'>Search a job</Button>
    </Box>
}