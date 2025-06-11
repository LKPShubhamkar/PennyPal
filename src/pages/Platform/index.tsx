import { Container } from "@mui/material";

import PlatformOne from "../../components/Platform/Platform-1";
import PlatformTwo from "../../components/Platform/Platform-2";
import PlatformThree from "../../components/Platform/Platform-3";

const Platform = () => {
  return (
    <Container maxWidth="lg">
      <PlatformOne />
      <PlatformTwo />
      <PlatformThree />
    </Container>
  );
};

export default Platform;
