import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { BiDollar } from "react-icons/bi";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش امدید</h1>

      <ul className="sidebar-links">
        
          <a href="#">
            <AiOutlineHome className="icon" /> صفحه ی اصلی{" "}
          </a>
        

        <NavLink
          className={(link) => (link.isActive ? "active" : "")}
          to="/products"
        >
          <MdProductionQuantityLimits className="icon" /> محصولات
        </NavLink>

        <NavLink
          className={(link) => (link.isActive ? "active" : "")}
          to="/comments"
        >
          <BiCommentDetail className="icon" /> کامنت ها
        </NavLink>

        <NavLink
          className={(link) => (link.isActive ? "active" : "")}
          to="/users"
        >
          <AiOutlineUser className="icon" /> کاربران
        </NavLink>

        <NavLink
          className={(link) => (link.isActive ? "active" : "")}
          to="/orders"
        >
          <BiShoppingBag className="icon" /> سفارشات
        </NavLink>

        <NavLink
          className={(link) => (link.isActive ? "active" : "")}
          to="/offs"
        >
          <BiDollar className="icon" /> تخفیف ها
        </NavLink>
      </ul>
    </div>
  );
}
