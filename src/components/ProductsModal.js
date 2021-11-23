import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard';
import SelectedProductCard from './SelectedProductCard';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import Badge from '@mui/material/Badge';

const style = {
  position: 'absolute',
  boxShadow: '0 0 20px 0px #0000003b',
  backdropFilter: 'blur(8px)',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '87%',
  height: '85%',
  overflowX: 'hidden',
  borderRadius: '5px',
  flexGrow: 1,
  p: '1%',
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  height: '125px',
  color: theme.palette.text.secondary
}));

const ProductsModal = ({ onCardSelect, products, name, cardType }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const categoryProducts = products.filter(e => e.category === name);

  const selectedProducts = products.filter(e => e.isSelected === true);
  
  return (
    (cardType === 'SelectedProduct') ?
    <>
      <Card onClick={handleOpen}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
              &nbsp;
              <Badge badgeContent={selectedProducts.length} color="primary"><ReceiptLongIcon /></Badge>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <Box id='1' sx={style}>
            <Grid id='2' container direction="column" justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
              {
                (selectedProducts.length > 0) ?
                products.map((p) => (
                  (p.isSelected === true) &&
                    <SelectedProductCard p={p} handleClose={handleClose} onCardSelect={onCardSelect} products={products} name={name}/>
                )) :
                <Fade in={(selectedProducts.length === 0)}>
                  <Grid className='SELECTED' style={{ marginTop: '90%' }} item xs={1} sm={4} md={4}>
                    <Typography gutterBottom variant="h5" component="div">
                      Não há pedidos
                    </Typography>
                  </Grid>
                </Fade>
              }
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </> :
    <>
    <Card onClick={handleOpen}>
        <CardActionArea>
          <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">            
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <Box id='1' sx={style}>
            <Grid id='2' container direction="row" justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
              {
                categoryProducts.map((e) => (
                  <ProductCard e={e} onCardSelect={onCardSelect} products={products} name={name}/>
                ))
              }
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

ProductsModal.defaultProps = {
  name: "[categoria do alimento]"
}

export default ProductsModal