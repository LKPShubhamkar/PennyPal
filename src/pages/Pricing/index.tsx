import { Container } from "@mui/material";
import PricingOne from "../../components/Pricing/Pricing-1";
import Pricingtwo from "../../components/Pricing/pricing-2";

const Pricing = () => {
  return (
    <Container maxWidth="lg">
      <PricingOne />
      <Pricingtwo />
    </Container>
  );
};

export default Pricing;
