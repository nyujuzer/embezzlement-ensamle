import React, { useEffect, useState } from 'react';
import { Typography, Button, Grid2, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { Product } from '../../types';

interface ProductDisplayProps {
  datasource_url:string
  token:string
}
const ProductDisplay = ({datasource_url, token}:ProductDisplayProps) => {
  const [data, setData] = useState<Product[]>([])
  useEffect(()=>{
    getProducts();
  })
  const getProducts = async () => {
    const response = await fetch(datasource_url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'User-Agent': 'insomnia/2023.5.8'
      },
    })
    const products = await response.json();
    setData(products.data)
    };
  return (
    <Grid2>
      {data.map((product)=>{
        return(
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
        )})}
    </Grid2>
  );
};

export default ProductDisplay;