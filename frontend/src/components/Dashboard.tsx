import { Outlet } from "react-router";
import { Nav } from ".";

const Dashboard = () => {
  //
  ////UI
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Dashboard;
