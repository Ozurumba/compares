import React from "react";
import {
    Grid,
    Button
  } from "@material-ui/core";
  
  import InputAdornment from '@material-ui/core/InputAdornment';
  
  import TextField from '@material-ui/core/TextField';
  import AccountCircle from '@material-ui/icons/AccountCircle';
  import FileUpload from "./FileUpload";
  import CloudUploadIcon from '@material-ui/icons/CloudUpload'
  


 const Compare = props => {
    
    return (<Grid container style={{backgroundColor: ''}} justify="center">
    {/* First section */}
        <Grid item sm={12}>
           <Grid container justify="space-around" alignItems="center">
             <Grid item sm={5} xs={5} md={5}>
             <TextField
               
               id="input-with-icon-textfield"
               label="Fullname"
               InputProps={{
                 startAdornment: (
                   <InputAdornment position="start">
                     <AccountCircle />
                   </InputAdornment>
                 ),
               }}
             />
             
             <FileUpload />

             </Grid>

             {/* Second Section */}
             <Grid item sm={5} xs={5} md={5}>
               <TextField
                 
                 id="input-with-icon-textfield"
                 label="Fullname"
                 InputProps={{
                   startAdornment: (
                     <InputAdornment position="start">
                       <AccountCircle />
                     </InputAdornment>
                   ),
                 }}
               />
               <FileUpload />
             </Grid>
             {/*End Second Section */}
           </Grid>
        </Grid>
        <Grid item style={{marginTop: '20px'}}>
          
           <Button
     variant="contained"
     color="primary"
     startIcon={<CloudUploadIcon />}
   >
     Compare
   </Button>
        </Grid>
    </Grid>
  )
}

export default Compare;