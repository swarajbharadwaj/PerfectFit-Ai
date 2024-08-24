import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
const navigation = [
  { title: "Dashboard", href: "/starter", icon: "bi bi-speedometer2" },
  { title: "Alert", href: "/alerts", icon: "bi bi-bell" },
  { title: "Purchase history", href: "/table", icon: "bi bi-layout-split" },
  {
    title: "Userdetails",
    href: "/UserDetailsTable",
    icon: "bi bi-link",
  },
  { title: "Add Items", href: "/forms", icon: "bi bi-textarea-resize" },
  { title: "About", href: "/about", icon: "bi bi-people" },
  
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3 sticky-sidebar">
    <div className="p-3 bg-dark" style={{ height: "100vh" }}>
      <div className="d-flex align-items-center">
        <Logo />
        <span className="ms-auto d-lg-none">
          <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.perfectfit.ai"
          >
            PerfectFit AI
          </Button>
        </span>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
                style={{
                  color: "white", // Default text color
                }}
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.wrappixel.com/templates/xtreme-react-redux-admin/?ref=33"
          >
            Logout
          </Button>
        </Nav>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
