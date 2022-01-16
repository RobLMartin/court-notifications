import CodeForAVLLogoSVG from "./code_for_avl.svg";
import CodeForAVLCondensedLogoSVG from "./code_for_asheville_condensed.svg";

const CONDENSED = "condensed";

const CodeForAshevilleLogo = ({ variant = CONDENSED }) => {
  const Logo =
    variant === CONDENSED ? CodeForAVLCondensedLogoSVG : CodeForAVLLogoSVG;

  return <img src={Logo} alt="Code for AVL" style={{ height: "30px" }} />;
};

export default CodeForAshevilleLogo;
