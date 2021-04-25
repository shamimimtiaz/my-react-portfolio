import React, { Component } from "react";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
// import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


class Contact extends Component {
 state ={
  formData: {
    name:'',
    email:'',
    message:'',
},
submitted: false,
}

handleChange = (event) => {
  const { formData } = this.state;
  formData[event.target.name] = event.target.value;
  this.setState({ formData });
}

handleSubmit = () => {
  this.setState({ submitted: true }, () => {
  setTimeout(() => this.setState({ submitted: false }), 5000);
  });
}

render() {
  const { formData, submitted } = this.state;
  
  //const classes = useStyles();
  return (
     <Box component="div" className="contactContainer">
      <Grid container justify="center">
        <Box component="form" >
        
          <Typography variant="h5" className="heading">
            Contact Me
          </Typography>

          <ValidatorForm
                ref='form'
                onSubmit={this.handleSubmit}
            >
                
                <TextValidator
                    label="Name"
                    onChange={this.handleChange}
                    name="name"
                    value={formData.name}
                    validators={['required', 'isName']}
                    errorMessages={['this field is required']}
                    
                />
                <br />
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br />
                <TextValidator
                    label="Message"
                    onChange={this.handleChange}
                    name="message"
                    value={formData.message}
                    validators={['required', 'isMessage']}
                    errorMessages={['this field is required']}
                />
                <br />
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                    {
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Submit')
                    }
                </Button>
            </ValidatorForm>
   
    </Box>
    </Grid>
    </Box>
    
  )
 }
};
                


export default Contact;







