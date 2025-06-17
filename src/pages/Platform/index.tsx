import PlatformOne from "../../components/Platform/Platform-1";
import PlatformTwo from "../../components/Platform/Platform-2";
import PlatformThree from "../../components/Platform/Platform-3";
import CustomContainer from "../../components/common/CustomContainer";

const Platform = () => {
  return (
    <CustomContainer>
      <PlatformOne />
      <PlatformTwo />
      <PlatformThree />
    </CustomContainer>
  );
};

export default Platform;
