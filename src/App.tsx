import React, { useEffect, useState } from "react";
import placeholder from "./Person2.png";
import "./App.css";
import { Box, Grid2, Typography, ListItemText, List } from "@mui/material";
import NavBar from "./components/navbar/navbar";
import ProductDisplay from "./components/displayCase/display";
import { Product } from "./types";
//import products from "./products.json";

function App() {
  
  const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6Ijc0NzYzYzFjZWM2YWJiZmM4YmIzYTc0ZmM1Y2I3NDk1MjkxOTFkNTk3ZGFlNDI5ZWNhNDI2NGVmODEwYjc5ZmFmN2UyMThlMGJiZmEwZjhjIiwiaWF0IjoxNzI2MDEwNzI2LjE1MzAxNSwibmJmIjoxNzI2MDEwNzI2LjE1MzAxNywiZXhwIjoxNzU3NTQ2NzI2LjE0NTQ4Nywic3ViIjoiMTk2NTExMDYiLCJzY29wZXMiOlsib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCJdfQ.AJpoofu_MGhetw6yHYTSuxGIntC-WCAgSbnj-G1IvPB3ArX_B2orMcg_5qCiMGmgDg6AiNh-AoqRQwa-tcs"
  const SHOP_ID = "17845890"
  const [data, setData] = useState<Array<Product>>(
    [{}] as Array<Product>
  );
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
          <ProductDisplay datasource_url={`https://api.printify.com/v1/shops/${SHOP_ID}/products.json`} token={API_KEY}/>
          </Grid2>
        </Box>
      </Box>
    </section>
  );
}

export default App;
