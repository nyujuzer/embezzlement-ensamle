import React, { useEffect, useState } from "react";
import placeholder from "./Person2.png";
import "./App.css";
import { Box, Grid2, Typography, ListItemText, List } from "@mui/material";
import NavBar from "./components/navbar/navbar";
import ProductDisplay from "./components/displayCase/display";
import { Product } from "./types";
//import products from "./products.json";

function App() {
  
  const API_KEY = process.env.REACT_APP_PRINTIFY_API_KEY;
  const SHOP_ID = process.env.REACT_APP_SHOP_ID;
  const [data, setData] = useState<Array<Product>>(
    [{}] as Array<Product>
  );

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`https://api.printify.com/v1/shops/${SHOP_ID}/products.json`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
        },
      })
      const products = await response.json();
      setData(products.data[0])
      };
    getProducts();
  });
  return (
    <section id="main">
      <Box sx={{ flexGrow: 1 }}>
        <NavBar></NavBar>
      </Box>
      <Box>
        <Typography fontFamily={"Permanent Marker"} align="center" variant="h1">
          Welcome to Embezzle Ensemble
        </Typography>
        <Box className="flex-r">
          <Box
            component="img"
            src={placeholder}
            sx={{
              maxWidth: { xs: "0%", md: "50%" },
              maxHeight: { xs: "0%", md: "50%" },
            }}
          ></Box>
          <Box className="flex-f">
            <Typography fontWeight={"bold"} fontFamily={"Lato"} variant="h4">
              We're not just selling clothes. We're making a statement.
            </Typography>
            <Typography fontWeight={"bold"} fontFamily={"Lato"} variant="h4">
              Our mission? Shine a spotlight on white-collar crime – through
              fashion.
            </Typography>
            <Typography fontWeight={"bold"} fontFamily={"Lato"} variant="h4">
              We believe in:
            </Typography>
            <List>
              <ListItemText>
                <p className="mb-text ">
                  - Dressing for the job you *want*, even if it's slightly
                  illegal
                </p>
              </ListItemText>
              <ListItemText>
                <p className="mb-text ">
                  - Making financial fraud fashionable (but not feasible)
                </p>
              </ListItemText>
              <ListItemText>
                <p className="mb-text ">
                  - Turning heads in the boardroom and the courtroom with
                  Embezzle Ensemble,
                </p>
              </ListItemText>
            </List>
            <Typography fontWeight={"bold"} fontFamily={"Lato"} variant="h4">
              we believe in dressing for success... even if that success is
              slightly questionable. Swindle in style. (Metaphorically, of
              course.)
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            fontFamily={"Permanent Marker"}
            align="center"
            variant="h1"
          >
            Products
          </Typography>
          <Grid2 wrap="wrap"  columns={3} container>
            {data.map((product: Product) => (
              <ProductDisplay key={product.id} product={product} />
            ))}
          </Grid2>
        </Box>
      </Box>
    </section>
  );
}

export default App;
