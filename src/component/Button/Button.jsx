import "./Button.css";
import { Link } from "react-router-dom";
export default function Button(props) {
  const { children, className, styled, type, path, ...rest } = props;
  if (type === "navigate" && path) {
    return (
      <Link className={`btn ${className}`} to={path} style={styled} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button className={`btn ${className}`} style={styled} {...rest}>
      {children}
    </button>
  );
}
