import CityOfAshevilleLogoSVG from "./city_of_asheville_logo.svg";

const LARGE = "lg";

const CityOfAshevilleLogo = ({ variant = LARGE }) => {
  if (variant === LARGE) {
    return (
      <img
        src={CityOfAshevilleLogoSVG}
        alt="Code for AVL"
        style={{ height: "40px", fill: "white" }}
      />
    );
  } else {
    return null;
  }
};

export default CityOfAshevilleLogo;
