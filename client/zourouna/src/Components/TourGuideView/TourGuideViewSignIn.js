import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './TourGuide.css'
import {useState} from 'react';
import{useNavigate} from 'react-router-dom'
import Axios from 'axios'
const theme = createTheme();

export default function TourGuideViewSignIn() {

  const [email,setEmail]=useState('');
  const [password,setPass]=useState('');
  const [firstName,setFirstName]=useState('');
  const navigate=useNavigate();
  const signInTourGuide=()=>{
  Axios.post('http://localhost:3050/signInTourGuide',{
    email:email,
    password:password
  }).then((response)=>{
    if(response.data)
     setFirstName(response.data[0].firstName)
     console.log(response.data[0].firstName)
      localStorage.setItem('name',response.data[0].firstName);
      localStorage.setItem('loggedIn','true');
      localStorage.setItem('user', 'guide')
      localStorage.setItem('email', email)
      navigate('/tourguideView')
   console.log('nav')
   window.location.reload(false);
    }).catch(error=>{
      console.log(error.response)
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          
          <Typography component="h1" variant="h5" className="anything">
        Provided by the company
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>{setPass(e.target.value)}}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={signInTourGuide}
            >
              Sign In
            </Button>
           
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}