import React, { useState } from "react";
import Navbar from "./navbar.js";
import Menu from "./menuApi.js";
import MenuCard from "./menuCard.js";

const uniqueList = Array.from(
  new Set(
    Menu.map((current) => {
      return current.category;
    })
  )
);

console.log(uniqueList);

const Restaurant = () => {
  const [menuData, setMenuData] = React.useState(Menu);
  const [menuList, setMenuList] = React.useState(uniqueList);
  // console.log(menuData);
  const filterItem = (item) => {
    const updatedList = Menu.filter((current) => {
      return current.category === item;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} list={menuList} />
      <MenuCard data={menuData} />
    </>
  );
};

export default Restaurant;
