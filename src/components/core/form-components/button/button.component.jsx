import "./buton.scss";

export const BUTTON_TYPE = {
  Google: "google-sign-in",
  Inverted: "inverted",
  Default: "default",
};

const ButtonComponent = ({ children, buttonType, ...otherProps }) => (
  <button className={`button-container ${buttonType}`}>{children}</button>
);

export default ButtonComponent;
