import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import PasswordStrengthBar from 'react-password-strength-bar';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Axios from 'axios';
import{useNavigate} from 'react-router-dom'
const theme = createTheme();




export default function SignUp() {

  const [firstName,setFirstName]=React.useState('');
  const [lastName,setLastName]=React.useState('');
  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');
  const navigate=useNavigate();
  const[number,setNumber]=useState('');
  const signUp=()=>{
    checkEmail();
    if(firstName.length!=0 && lastName.length!=0 && email.length!=0 && password.length!=0){
    Axios.post('http://localhost:3050/create',{firstName:firstName,
    lastName:lastName,
    email:email,
    password:password,
    points:0
  }).then(
)

const bool=localStorage.getItem('number')==0;
console.log(bool)
if(localStorage.getItem('number')==0){
  console.log('fetna')
  localStorage.setItem('name',firstName);
    localStorage.setItem('loggedIn','true');
    localStorage.setItem('email',email);
    localStorage.setItem('user', 'client')
    navigate('/')
 console.log('nav')
 window.location.reload(false);
}else{
  alert('Email in use')
  localStorage.removeItem('number')
}
    
   
    }else{
      alert('Fill in all the values!')
      localStorage.removeItem('number')
    }
    localStorage.removeItem('number')
  }

  const checkEmail=()=>{
    console.log(email)

    Axios.post('http://localhost:3050/checkEmail',{
  email:email
  }).then((response)=>{
    if(response.data){
      console.log(response.data[0].number)
  localStorage.setItem('number',response.data[0].number)
  
  

    }
  })
}




  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
           
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e)=>{setFirstName(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e)=>{setLastName(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
                <PasswordStrengthBar password={password} />
              </Grid>
             
              <Grid item xs={12}>
                
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={signUp}
            
            >
              Sign Up
            </Button>
            
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}