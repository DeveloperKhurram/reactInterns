import React from "react";
import "./sidebar.css";
import { SidebarHeading, SidebarItem, SearchBox } from "../elements/index";

const Sidebar = () => {
  return (
    <div className="py-4">
      <div className="sidebar-group border-bottom pb-5">
        <SidebarHeading heading={"Skills"} />
        <SearchBox name={"Skills"} />
        <SidebarItem item={"UX Designer"} number={"1945"} />
        <SidebarItem item={"UX Designer"} number={"1945"} />
        <SidebarItem item={"UX Designer"} number={"1945"} />
        <SidebarItem item={"UX Designer"} number={"1945"} />
        <SidebarItem item={"UX Designer"} number={"1945"} />
      </div>

      <div className="sidebar-group border-bottom pb-5">
        <SidebarHeading heading={"Cities"} />
        <SearchBox name={"Cities"} />
        <SidebarItem item={"Karachi"} number={"1945"} />
        <SidebarItem item={"Lahore"} number={"1945"} />
        <SidebarItem item={"Islamabad"} number={"1945"} />
        <SidebarItem item={"Rawalpindi"} number={"1945"} />
        <SidebarItem item={"Faisalabad"} number={"1945"} />
      </div>

      <div className="sidebar-group border-bottom pb-5">
        <SidebarHeading heading={"Languages"} />
        <SidebarItem item={"English"} number={"1945"} />
        <SidebarItem item={"Urdu"} number={"1945"} />
        <SidebarItem item={"French"} number={"1945"} />
        <SidebarItem item={"Others"} number={"1945"} />
      </div>

      <div className="sidebar-group">
        <SidebarHeading heading={"Level"} />
        <SidebarItem item={"Recommended"} number={"1945"} />
        <SidebarItem item={"Top Rated"} number={"1945"} />
        <SidebarItem item={"Level Two"} number={"1945"} />
        <SidebarItem item={"Level One"} number={"1945"} />
        <SidebarItem item={"Newbies"} number={"1945"} />
      </div>
    </div>
  );
};

export default Sidebar;
