import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignUp from '../SignUp/SignUp';
import Axios  from 'axios';
import Villages from '../Villages/Villages';
import{useNavigate} from 'react-router-dom'


const theme = createTheme();


export default function SignIn() {
   const [email,setEmail]=useState('');
   const [password,setPass]=useState('');
   const [firstName,setFirstName]=useState('');
   const [loggedIn,setLoggedIn]=useState('');
   const navigate=useNavigate();


 const signInClient=()=>{

  Axios.post('http://localhost:3050/signInClient',{
    email:email,
    password:password
  }).then((response)=>{
    if(response.data){
     setFirstName(response.data[0].firstName)
     console.log(response.data[0].firstName)
      localStorage.setItem('name',response.data[0].firstName);
      localStorage.setItem('loggedIn','true');
      localStorage.setItem('email',email);
      navigate('/')
   console.log('nav')
   window.location.reload(false);
    }}).catch(error=>{
      console.log(error.response)
    })
 
}

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://upgradedpoints.com/wp-content/uploads/2019/10/Lebanon.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'grey' }}>
            
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in 
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              
              <Button
                
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
               onClick={signInClient}
            
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
             
                </Grid>
                <Grid item>
                  
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
               
              </Grid>
              <Grid item xs>
                  <Link href="/tourguide" variant="body2">
                    Tour Guide 
                  </Link>
             
                </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
