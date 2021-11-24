import React, { ReactElement } from "react";

interface IButtonProps {
  buttontitle?: string;
  onClick?: any;
}

function Button({ buttontitle, onClick }: IButtonProps): ReactElement {
  return <button onClick={onClick}>{buttontitle}</button>;
}

export default Button;
