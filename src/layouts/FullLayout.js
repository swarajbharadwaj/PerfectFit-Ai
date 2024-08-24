import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";
import './FullLayout.css';

const FullLayout = () => {
  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}
        <div className="contentArea">
        <Header />
        <div className="contentArea1">
          {/********header**********/}
          
          {/********Middle Content**********/}
          <Container className="p-4 wrapper content" fluid>
            <Outlet />
          </Container>
        </div>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
