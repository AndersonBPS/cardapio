import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProductsModal from './components/ProductsModal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '90%',
  overflowX: 'hidden',
  flexGrow: 1,
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

export default function AutoGrid() {
  const [products, setProducts] = useState([
    {
      category: 'Salgado', 
      name: 'pastel',
      img: 'https://www.clubedereceita.com.br/wp-content/uploads/2020/03/receita-de-massa-de-pastel-1068x566.jpg',
      isSelected: false,
    },
    {
      category: 'Bebida', 
      name: 'suco de laranja',
      img: 'https://img.riomarevoce.com/fortalezashopping/2020/05/Suco_de_laranja_cheppitos.jpg',
      isSelected: false,
    },
    {
      category: 'Doce', 
      name: 'bolo podre',
      img: 'https://t1.rg.ltmcdn.com/pt/images/1/9/3/bolo_podre_de_tapioca_5391_orig.jpg',
      isSelected: false,
    },
    {
      category: 'Bebida', 
      name: 'milkshake de ovomaltine',
      img: 'https://www.guiadasemana.com.br/contentFiles/image/2016/09/FEA/principal/52467_w840h0_1474312912milkshake-de-chocolate.jpg',
      isSelected: false,
    },
  ])

  const categories = [];
  products.forEach(e => {
	  if (!categories.includes(e.category)){
    	categories.push(e.category);
    }
  });
  
  const selectProduct = (name) => {
    setProducts(
      products.map((p) => 
        p.name === name ? 
        { ...p, isSelected: !p.isSelected } :
        p
      )
    )
  }

  return (
    <Box sx={style}>
      <Grid container rowSpacing={1} columnSpacing={1} direction="row" justifyContent="center" alignItems="center">
        <Grid container item xs={12} spacing={3} height='300px' justifyContent="space-evenly" alignItems="center">
          <Grid item xs={6}>
            <Item style={{ height: 150 }}>[nome do restaurante]</Item>
          </Grid>
          <Grid item xs={6}>
            <ProductsModal onCardSelect={selectProduct} cardType={'SelectedProduct'} products={products} name={"Meus pedidos"}/>
          </Grid>
        </Grid>
        <Grid container item xs spacing={1} direction="row" justifyContent="space-between" alignItems="center">
          {
            categories.map((c) => (
              <Grid item xs><ProductsModal onCardSelect={selectProduct} products={products} name={c}/></Grid>
            ))
          }
        </Grid>
      </Grid>
    </Box>
  );
}