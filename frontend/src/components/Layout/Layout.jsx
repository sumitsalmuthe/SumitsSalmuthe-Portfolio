import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <div className="container">
        {children}
      </div>
    </main>
  );
};

export default Layout;