import { Box, Typography } from "@mui/material";

interface CardProps {
  title: string;
  width?: number;
  height?: number;
  fontSize?: string;
}

const Card = ({
  title,
  width = 180,
  height = 90,
  fontSize = "14px",
}: CardProps) => {
  const innerBoxPadding = 10;
  const innerBoxWidth = width - innerBoxPadding * 2;
  const innerBoxHeight = height - innerBoxPadding * 2;

  return (
    <Box
      sx={{
        border: "0.4px solid #5633CD40",
        width,
        height,
        borderRadius: `${height * 0.27}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 1.5,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: innerBoxPadding,
          left: innerBoxPadding,
          width: innerBoxWidth,
          height: innerBoxHeight,
          borderRadius: `${height * 0.2}px`,
          background: "linear-gradient(231.74deg, #F3EFFF 0%, #FFFFFF 61.91%)",
          zIndex: 0,
        }}
      />

      <Typography
        sx={{
          fontFamily: "Lato",
          fontWeight: 500,
          fontSize, // ✅ using the passed fontSize
          lineHeight: "100%",
          textAlign: "center",
          color: "#5633CD",
          px: 1.5,
          py: 0.5,
          borderRadius: "8px",
          zIndex: 1,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Card;
