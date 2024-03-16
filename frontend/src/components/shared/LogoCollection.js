import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Dash from "../../assets/dash.png";
import Amtool from "../../assets/AM tool.png";
import tool from "../../assets/toolpreview.png";
import { blue, green, red } from "@mui/material/colors";

const items = [
  {
    title: "Interactive Dashboard",
    description:
      "With lots of unique charts and graphs, you can easily visualize and understand the analytics of your financial spendings.",
    Image: Dash,
    color: red,
  },
  {
    title: "Assets Managment",
    description:
      "Purchase manage and maintain all of your assets one stop with the help of our managment tools",
    Image: Amtool,
    color: blue,
  },
  {
    title: "Financial Tools",
    description:
      "We offer various financial tools to simplify and maintain your financial records such as Goal setting, Debt management and retirement planning",
    Image: tool,
    color: green,
  },
];

export default function Highlights() {
  const logoStyle = {
    width: "300px",
    height: "250px",
    cursor: "pointer",
  };
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            Our Services
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            We provide great variety of services for our customers based on
            their Financial needs
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <Box sx={{ opacity: "100%" }}>
                  <img
                    src={item.Image}
                    style={logoStyle}
                    alt="logo of sitemark"
                  />
                </Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
