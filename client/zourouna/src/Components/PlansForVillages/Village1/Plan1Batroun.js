import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Calendar.css';
import './Triall.css';

function Plan1Batroun() {
    
 
  return (
    <div className="All">

<Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="fullWidth" id="fullWidth" />
    </Box>


        
    </div>

  );
}

export default Plan1Batroun;