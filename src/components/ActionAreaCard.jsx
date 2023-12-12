import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ poster, title, year, type }) {
  return (
    <Card
      sx={{
        width: "300px",
        gap: "3",
        marginTop: "2rem",
        marginBottom: "1rem",
        margin: "1rem",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="240" image={poster} alt={title} />
        <CardContent sx={{ backgroundColor: "#fff" }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {type} | {year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
