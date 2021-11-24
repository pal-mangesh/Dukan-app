import { ReactElement } from "react";
import "./index.css";


interface IHeaderProps {
  headerTitle?: string;
  children?: any;
}

const Header = ({headerTitle,children}:IHeaderProps):ReactElement => {
  return (
    <><h1>{headerTitle}</h1>
    <div>{children}</div>
    </>
  );
};

export default Header;