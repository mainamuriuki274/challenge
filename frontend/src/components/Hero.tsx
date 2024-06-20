import { Box, Typography } from "@mui/material";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        my: 4,
      }}
    >
      <img src="/assets/summer-icon.svg" alt=""></img>
      <Typography
        variant="h1"
        sx={{
          fontSize: "36px",
          color: "var(--steel-blue)",
          fontWeight: 700,
          marginTop: "30px",
        }}
      >
        Confident, Independent Reading
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: "20px",
          fontFamily: "Mulish",
          color: "var(--dark)",
          fontWeight: 600,
          lineHeight: "1.5",
          marginTop: "20px",
        }}
      >
        Over 700 decodable books that match your child's reading ability. Help
        prevent the summer slump, without frustration
      </Typography>
    </Box>
  );
};

export default Hero;
