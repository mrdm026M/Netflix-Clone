import { createGlobalStyle } from "styled-components";
import BebasNeueRegular from "../assets/fonts/BebasNeue-Regular.ttf";
import LeagueSpartan from "../assets/fonts/LeagueSpartan-Bold.otf";
import MontserratBold from "../assets/fonts/Montserrat-Bold.ttf";
import MontserratMedium from "../assets/fonts/Montserrat-Medium.ttf";
import MontserratRegular from "../assets/fonts/Montserrat-Regular.ttf";
import MontserratSemiBold from "../assets/fonts/Montserrat-SemiBold.ttf";
import OpenSansBold from "../assets/fonts/OpenSans-Bold.ttf";
import OpenSansExtraBold from "../assets/fonts/OpenSans-ExtraBold.ttf";
import OpenSansSemiBold from "../assets/fonts/OpenSans-SemiBold.ttf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'MB';
    src: url(${MontserratBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'MSB';
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'MM';
    src: url(${MontserratMedium});
    font-style: normal;
  }
  @font-face {
    font-family: 'MR';
    src: url(${MontserratRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'OEB';
    src: url(${OpenSansExtraBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'OB';
    src: url(${OpenSansBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'OSB';
    src: url(${OpenSansSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'LSB';
    src: url(${LeagueSpartan});
    font-style: normal;
  }
  @font-face {
    font-family: 'BNR';
    src: url(${BebasNeueRegular});
    font-style: normal;
  }
`;

export default Typography;
