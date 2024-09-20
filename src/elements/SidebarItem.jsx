import React from "react";

const SidebarItem = ({ item, number }) => {
  return (
    <div className="skill-row">
      <div className="skill-type">
        <input type="checkbox" name="uxdesigner" id="uxdesigner" value={item} className=""/>
        <label>{item}</label>
      </div>
      <span className="">({number})</span>
    </div>
  );
};

export default SidebarItem;
