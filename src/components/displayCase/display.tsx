import React from 'react';
import { Typography, Button, Grid2, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { Product } from '../../types';

interface ProductDisplayProps {
  product: Product;
}
const ProductDisplay = ({product}:ProductDisplayProps) => {
  return (
    <Grid2>
      <Card variant='outlined' sx={{ maxWidth: "33vw", m:3 }}>
        <CardMedia>
          <img src={product.images[0].src} alt={product.title} style={{ width: '25vw', height: 'auto' }} />
        </CardMedia>
        <CardContent >
          <Typography variant="h5">{product.title}</Typography>
          <Typography variant="subtitle1">10</Typography>
        </CardContent>
          <CardActions>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
          </CardActions>
      </Card>
    </Grid2>
  );
};

export default ProductDisplay;