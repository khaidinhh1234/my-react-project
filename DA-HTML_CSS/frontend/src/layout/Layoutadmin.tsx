import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <div className="grid grid-cols-[300px,auto]">
      <aside>
        <h1>Header</h1>
      </aside>
      <main>
        <Outlet />
      </main>{" "}
      <aside>
        <h1>Footer</h1>
      </aside>
    </div>
  );
};

export default LayoutAdmin;
