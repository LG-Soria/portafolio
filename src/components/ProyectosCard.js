import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

 const ProyectosCard = (props) => {
  return (
    <Card sx={{minWidth:300, height: "90%"} } >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.image}
      />
      <CardContent className='sm: flex flex-col items-center  lg:content-end'>
        <Typography gutterBottom variant="h5" component="div">
          {props.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary" >  
          {props.descripcion}
        </Typography>
      </CardContent>
      <CardActions className='sm: flex flex-row justify-center '>
        <Button size="small"><a href={props.enlace1}> Ver en GitHub</a></Button>
        <Button size="small"><a target='_blank' rel='noreferrer' href={props.enlace2}> Ver Proyecto</a> </Button>
      </CardActions>
    </Card>
  );
}

export default ProyectosCard;