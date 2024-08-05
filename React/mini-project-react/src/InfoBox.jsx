/* eslint-disable no-unused-vars */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox() {
    let info = {
        name: "Delhi",
        country: "India",
        temp: 30,
        humidity: 50,
        pressure: 1000,
        weather: "Sunny"
    };
    
  return (
    <div className='InfoBox'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.name} of {info.country}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={'span'}>
            <p>Temperature: {info.temp}&deg;C</p> 
            <p>Humidity: {info.humidity}%</p>
            <p>Pressure: {info.pressure}hPa</p>
            <p>Now, the Weather can be described as <i>{info.weather}</i></p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
    </div>
  );
}