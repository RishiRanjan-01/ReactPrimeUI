import React from "react";
import { PanelMenu } from "primereact/panelmenu";
import "./sidebar.css"
const Sidebar = () => {
  const menu = [
    {
      label: "Direct Cost",
      icon: "pi pi-home",
      items: [{ label: "Dashboard", icon: "pi pi-home", to: "/" }],
    },
    {
      label: "Revenue",
      icon: "pi pi-star",
      items: [
        { label: "Form Layout", icon: "pi pi-id-card", to: "/formlayout" },
        { label: "Input", icon: "pi pi-check-square", to: "/input" },
        // { label: "Float Label", icon: "pi pi-bookmark", to: "/floatlabel" },
        // {
        //   label: "Invalid State",
        //   icon: "pi pi-exclamation-circle",
        //   to: "/invalidstate",
        // },
        // {
        //   label: "Button",
        //   icon: "pi pi-mobile",
        //   to: "/button",
        //   className: "rotated-icon",
        // },
        // { label: "Table", icon: "pi pi-table", to: "/table" },
        // { label: "List", icon: "pi pi-list", to: "/list" },
        // { label: "Tree", icon: "pi pi-share-alt", to: "/tree" },
        // { label: "Panel", icon: "pi pi-tablet", to: "/panel" },
        // { label: "Overlay", icon: "pi pi-clone", to: "/overlay" },
        // { label: "Media", icon: "pi pi-image", to: "/media" },
        // { label: "Menu", icon: "pi pi-bars", to: "/menu" },
        // { label: "Message", icon: "pi pi-comment", to: "/message" },
        // { label: "File", icon: "pi pi-file", to: "/file" },
        // { label: "Chart", icon: "pi pi-chart-bar", to: "/chart" },
        // { label: "Misc", icon: "pi pi-circle", to: "/misc" },
      ],
    },
    {
      label: "Invoice",
      icon: "pi pi-building",
      items: [
        {
          label: "Free Blocks",
          icon: "pi pi-eye",
          to: "/blocks",
          badge: "NEW",
        },
        {
          label: "All Blocks",
          icon: "pi pi-globe",
          url: "https://www.primefaces.org/primeblocks-react",
          target: "_blank",
        },
      ],
    },
    // {
    //   label: "Utilities",
    //   icon: "pi pi-compass",
    //   items: [
    //     { label: "Icons", icon: "pi pi-prime", to: "/icons" },
    //     {
    //       label: "PrimeFlex",
    //       icon: "pi pi-desktop",
    //       url: "https://www.primefaces.org/primeflex",
    //       target: "_blank",
    //     },
    //     {
    //       label: "Figma",
    //       icon: "pi pi-pencil",
    //       url: "https://www.figma.com/file/two0OGwOwHfq0sdjeK34l0/Preview-%7C-Atlantis-2022?node-id=15%3A1427&t=2lNJ5EzW0xuvQWdm-1",
    //       target: "_blank",
    //     },
    //   ],
    // },
    // {
    //   label: "Pages",
    //   icon: "pi pi-briefcase",
    //   items: [
    //     { label: "Crud", icon: "pi pi-pencil", to: "/crud" },
    //     { label: "Calendar", icon: "pi pi-calendar-plus", to: "/calendar" },
    //     { label: "Timeline", icon: "pi pi-calendar", to: "/timeline" },
    //     {
    //       label: "Landing",
    //       icon: "pi pi-globe",
    //       url: "assets/pages/landing.html",
    //       target: "_blank",
    //     },
    //     { label: "Login", icon: "pi pi-sign-in", to: "/login" },
    //     { label: "Invoice", icon: "pi pi-dollar", to: "/invoice" },
    //     { label: "Help", icon: "pi pi-question-circle", to: "/help" },
    //     { label: "Error", icon: "pi pi-times-circle", to: "/error" },
    //     {
    //       label: "Not Found",
    //       icon: "pi pi-exclamation-circle",
    //       to: "/notfound",
    //     },
    //     { label: "Access Denied", icon: "pi pi-lock", to: "/access" },
    //     { label: "Empty Page", icon: "pi pi-circle", to: "/empty" },
    //   ],
    // },
    // {
    //   label: "Hierarchy",
    //   icon: "pi pi-align-left",
    //   items: [
    //     {
    //       label: "Submenu 1",
    //       icon: "pi pi-align-left",
    //       items: [
    //         {
    //           label: "Submenu 1.1",
    //           icon: "pi pi-align-left",
    //           items: [
    //             { label: "Submenu 1.1.1", icon: "pi pi-align-left" },
    //             { label: "Submenu 1.1.2", icon: "pi pi-align-left" },
    //             { label: "Submenu 1.1.3", icon: "pi pi-align-left" },
    //           ],
    //         },
    //         {
    //           label: "Submenu 1.2",
    //           icon: "pi pi-align-left",
    //           items: [
    //             { label: "Submenu 1.2.1", icon: "pi pi-align-left" },
    //             { label: "Submenu 1.2.2", icon: "pi pi-align-left" },
    //           ],
    //         },
    //       ],
    //     },
    //     {
    //       label: "Submenu 2",
    //       icon: "pi pi-align-left",
    //       items: [
    //         {
    //           label: "Submenu 2.1",
    //           icon: "pi pi-align-left",
    //           items: [
    //             { label: "Submenu 2.1.1", icon: "pi pi-align-left" },
    //             { label: "Submenu 2.1.2", icon: "pi pi-align-left" },
    //             { label: "Submenu 2.1.3", icon: "pi pi-align-left" },
    //           ],
    //         },
    //         {
    //           label: "Submenu 2.2",
    //           icon: "pi pi-align-left",
    //           items: [
    //             { label: "Submenu 2.2.1", icon: "pi pi-align-left" },
    //             { label: "Submenu 2.2.2", icon: "pi pi-align-left" },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   label: "Start",
    //   icon: "pi pi-download",
    //   items: [
    //     {
    //       label: "Documentation",
    //       icon: "pi pi-question",
    //       to: "/documentation",
    //     },
    //     {
    //       label: "Buy Now",
    //       icon: "pi pi-shopping-cart",
    //       command: () => {
    //         window.location = "https://www.primefaces.org/store";
    //       },
    //     },
    //   ],
    // },
  ];

  return (
      <div className="card flex justify-content-center" >
        <PanelMenu
          model={menu}
        />
      </div>
  );
};

export default Sidebar;