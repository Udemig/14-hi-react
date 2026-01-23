import type React from "react";
import type { JSX, FC } from "react";

interface IProps {
  text: string;
}

// 1) Component tipi tanımlamama
// Prop Type: Tanımlandı
// Return Type: Oto Algılama
const Button1 = ({ text }: IProps) => {
  return <button>{text}</button>;
};

// 2) Component tipi tanımlamama
// Prop Type: Tanımlandı
// Return Type: Tanımlandı
const Button2 = ({ text }: IProps): JSX.Element => {
  return <button>{text}</button>;
};

// 3) Component tipi tanımlamama
// Prop Type: Tanımlandı
// Return Type: Tanımlandı
const Button3 = ({ text }: IProps): React.ReactNode => {
  return <button>{text}</button>;
};

// 4) Component tipi tanımlamama
// Prop Type: FC
// Return Type: FC
const Button4: FC<IProps> = ({ text }) => {
  return <button>{text}</button>;
};

export default Button4;
