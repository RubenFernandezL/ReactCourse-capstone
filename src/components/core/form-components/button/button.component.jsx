import {
  BaseButton,
  InvertedButton,
  GoogleSignInButton,
} from "./button.styles";

export const BUTTON_TYPE = {
  Google: "google-sign-in",
  Inverted: "inverted",
  Default: "default",
};

const getButton = (buttonType = BUTTON_TYPE.Default) =>
  ({
    [BUTTON_TYPE.Default]: BaseButton,
    [BUTTON_TYPE.Google]: GoogleSignInButton,
    [BUTTON_TYPE.Inverted]: InvertedButton,
  }[buttonType]);

const ButtonComponent = ({ children, buttonType, ...otherProps }) => {
  const Button = getButton(buttonType);
  return <Button {...otherProps}>{children}</Button>;
};

export default ButtonComponent;
