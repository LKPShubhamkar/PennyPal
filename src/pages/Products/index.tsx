import { Container } from "@mui/material";
import ProductOne from "../../components/Products/Product-1";
import ProductTwo from "../../components/Products/Product-2";

const Products = () => {
  return (
    <Container maxWidth="lg">
      <ProductOne />
      <ProductTwo />
    </Container>
  );
};

export default Products;
