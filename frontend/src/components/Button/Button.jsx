import "./Button.css";

const Button = ({
  children,
  href,
  variant = "primary",
}) => {
  return (
    <a
      href={href}
      className={`btn ${variant}`}
    >
      {children}
    </a>
  );
};

export default Button;