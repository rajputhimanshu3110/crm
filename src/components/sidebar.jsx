import React from "react";
import {
  List,
  Card,
  Alert,
  Avatar,
  ListItem,
  Accordion,
  Typography,
  AccordionBody,
  ListItemPrefix,
  AccordionHeader,
} from "@material-tailwind/react";
import "./style.css";
import {
  TicketIcon,
  UserGroupIcon,
  Square2StackIcon,
  RectangleGroupIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import logo from "../images/logo.png";

import {
  ChevronDownIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const routes = [
  [
    {
      title: "Dashboard",
      link: "/",
      icon: <RectangleGroupIcon className="h-5 w-5" />,
    },
    {
      title: "Reports",
      link: "/",
      icon: <RectangleGroupIcon className="h-5 w-5" />,
    },
    {
      title: "User",
      icon: <RectangleGroupIcon className="h-5 w-5" />,
      id: 1235,
      routes: [
        {
          title: "Add User",
          link: "/user/add",
        },
        {
          title: "Users List",
          link: "/users",
        },
        {
          title: "BOM Master",
          link: "/",
        },
      ],
    },
  ],
  [
    {
      title: "Pending Verification",
      link: "/sccs",
      icon: <RectangleGroupIcon className="h-5 w-5" />,
    },
    {
      title: "Users",
      link: "/sccs",
      icon: <RectangleGroupIcon className="h-5 w-5" />,
    },
    {
      title: "Others",
      icon: <RectangleGroupIcon className="h-5 w-5" />,
      id: 1234,
      routes: [
        {
          title: "Raw Inputs",
          link: "/sccs",
        },
        {
          title: "Mischellenous",
          link: "/sccs",
        },
        {
          title: "BOM Master",
          link: "/sccs",
        },
      ],
    },
  ],
];

export default function Sidebar() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const LIST_ITEM_STYLES =
    "select-none hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 data-[selected=true]:text-gray-900";

  return (
    <Card className="h-[100vh] w-full max-w-[20rem] min-w-[18rem] p-4 shadow-md overflow-auto sidebar lg:block hidden rounded-none">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img
          src={logo}
          alt="brand"
        />
      </div>

      <List>
        {routes.map((navs) => {
          return (
            <>
              <hr className="my-2 border-gray-200" />
              <List>
                {navs.map((nav) => {
                  if (nav.routes) {
                    return (
                      <Accordion open={open === nav.id}>
                        <ListItem
                          selected={open === nav.id}
                          data-selected={open === nav.id}
                          onClick={() => handleOpen(nav.id)}
                          className="px-3 py-[9px] select-none hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 data-[selected=true]:text-gray-900"
                        >
                          <ListItemPrefix>{nav.icon}</ListItemPrefix>
                          <Typography className="mr-auto font-normal text-inherit">
                            {nav.title}
                          </Typography>
                          <ChevronDownIcon
                            strokeWidth={3}
                            className={`ml-auto h-4 w-4 text-gray-500 transition-transform ${open === 2 ? "rotate-180" : ""
                              }`}
                          />
                        </ListItem>
                        <AccordionBody className="py-1">
                          <List className="p-0">
                            {nav.routes.map((subRoute) => {
                              return (
                                <Link to={subRoute.link}><ListItem
                                  className={`px-12 ${LIST_ITEM_STYLES}`}
                                >
                                  {subRoute.title}
                                </ListItem>
                                </Link>

                              );
                            })}
                          </List>
                        </AccordionBody>
                      </Accordion>
                    );
                  } else {
                    return (
                      <Link to={nav.link}>
                        <ListItem className={LIST_ITEM_STYLES}>
                          <ListItemPrefix>{nav.icon}</ListItemPrefix>
                          {nav.title}
                        </ListItem></Link>
                    );
                  }
                })}
              </List>
            </>
          );
        })}
      </List>
      <Typography
        variant="small"
        className="mt-5 font-medium text-gray-500 flex justify-center"
      >
        Seemarise Pvt. Ltd.
      </Typography>
    </Card>
  );
}
