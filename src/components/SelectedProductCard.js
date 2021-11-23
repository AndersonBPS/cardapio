import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import Grid from '@mui/material/Grid';
import { Collapse } from '@mui/material';

const SelectedProductCard = ({ p, handleClose, onCardSelect, products }) => {

  const selectedProducts = products.filter(e => e.isSelected === true);

  return (
    <Grid className='SELECTED' item xs={1} sm={4} md={4}>
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {p.name}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Box sx={{ display: 'flex', p: 1 }}>
              <Button size="small" onClick={() => onCardSelect(p.name)}>
                <ClearIcon />
                &nbsp;
                Retirar do pedido
              </Button>
            </Box>
          </CardActions>
        </Box>
        <Box sx={{ display: 'flex'}}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image= {p.img}
            alt="Live from space album cover"
          />
        </Box>
      </Card>
    </Grid>
  );
}

export default SelectedProductCard