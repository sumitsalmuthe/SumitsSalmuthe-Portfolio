import "./Button.css";

const Button = ({
  children,
  href,
  variant = "primary",
  target,
  rel,
}) => {
  return (
    <a
      href={href}
      className={`btn ${variant}`}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
};

export default Button;