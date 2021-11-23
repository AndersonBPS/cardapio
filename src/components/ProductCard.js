import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProductCard = ({ e, onCardSelect, products, name }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid className='PRODUCT' item xs={1} sm={4} md={4}>
      <Card sx={{ width: '100%' }}>
        <CardHeader
          avatar={<FastfoodIcon />}
          title={e.name}
        />
        <CardMedia
          component="img"
          height="194"
          image= {e.img}
          alt={'[foto do alimento' + e.name + ']'}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            [descricao do {e.name}]
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {
            (e.isSelected === true) ?
            <Button size="small" onClick={() => onCardSelect(e.name)}>
              <ClearIcon />
              &nbsp;
              Retirar do pedido
            </Button> :
            <Button size="small" onClick={() => onCardSelect(e.name)}>
              <AddIcon />
              &nbsp;
              Adicionar ao pedido
            </Button>
          }
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>[descricao detalhada {e.name}]</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}

ProductCard.defaultProps = {
  name: "[nome do alimento]"
}

export default ProductCard