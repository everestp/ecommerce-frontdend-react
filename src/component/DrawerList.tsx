import { ClassNames } from "@emotion/react";
import { Divider, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useAppDispatch } from "../State/Store";
import { logout } from "../State/seller/AuthSlice";

interface menuItem {
  name: any;
  path: string;
  icon: any;
  activeIcon: any;
}
interface DrawerListProp {
  menu: menuItem[];
  menu2: menuItem[];
  toggleDrawer: () => void;
}

const DrawerList = ({ menu, menu2, toggleDrawer }: DrawerListProp) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout(navigate));
  };
  return (
    <div className="h-full">
      <div className="flex flex-col justify-baseline  h-full w-[300px] border-r py-5">
        <div className="space-y-2">
          {menu.map((item, index: number) => (
            <div
              className="pr-9 cursor-pointer"
              key={index}
              onClick={() => navigate(item.path)}
            >
              <p
                className={`${
                  item.path == location.pathname
                    ? "bg-primary-color text-white"
                    : "text-primary-color"
                } flex items-center px-5 py-3 rounded-full`}
              >
                <ListItemIcon>
                  {item.path == location.pathname ? item.activeIcon : item.icon}
                </ListItemIcon>

                <ListItemText primary={item.name} />
              </p>
            </div>
          ))}
        </div>

        <Divider />

        <div className="space-y-2 mt-20 ">
          {menu2.map((item, index: number) => (
            <div
              className="pr-9 cursor-pointer"
              key={index}
              onClick={() => {
                navigate(item.path);
                if (item.path == "/") handleLogout();
              }}
            >
              <p
                className={`${
                  item.path == location.pathname
                    ? "bg-primary-color text-white"
                    : "text-primary-color"
                } flex items-center px-5 py-3 rounded-full`}
              >
                <ListItemIcon>
                  {item.path == location.pathname ? item.activeIcon : item.icon}
                </ListItemIcon>

                <ListItemText primary={item.name} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrawerList;
