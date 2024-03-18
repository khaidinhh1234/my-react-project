import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { menuList } from "../api/menu";

const Sidebar = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await menuList();
      setMenus(data);
    })();
  }, []);

  return (
    <div
      style={{ height: "40em" }}
      className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary"
    >
      <div
        className="offcanvas-md offcanvas-end bg-body-tertiary"
        tabIndex={-1}
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            Company name
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            {menus.map((menu: any, i) => (
              <li className="nav-item" key={i}>
                <NavLink
                  to={menu.path}
                  className="nav-link d-flex align-items-center gap-2 active"
                  aria-current="page"
                >
                  <div className="tw-ml-3 tw-text-indigo-700 tw-text-xl">
                    {/* <ion-icon name={menu.icon}></ion-icon> */}
                  </div>
                  <h6 className="tw-text-indigo-700">{menu.lable}</h6>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
