import React, { useState } from "react";
import { Card, Button, Typography, IconButton } from "@material-tailwind/react";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Pagination } from "../../components/pagination";

const TABLE_HEAD = ["Name", "Role", "Email", "Location"];

const TABLE_ROWS = [
  {
    email: "alice.jones@example.com",
    position: "Software Developer",
    name: "Alice Jones",
    address: "101 Pine St, Springfield",
  },
  {
    email: "mark.smith@example.com",
    position: "Project Coordinator",
    name: "Mark Smith",
    address: "202 Oak Ave, Metropolis",
  },
  {
    email: "lucy.brown@example.com",
    position: "Data Scientist",
    name: "Lucy Brown",
    address: "303 Maple Dr, Gotham",
  },
  {
    email: "james.wilson@example.com",
    position: "UX/UI Designer",
    name: "James Wilson",
    address: "404 Elm St, Hill Valley",
  },
  {
    email: "nora.davis@example.com",
    position: "Marketing Specialist",
    name: "Nora Davis",
    address: "505 Birch Ln, Lakeview",
  },
  {
    email: "eric.miller@example.com",
    position: "Sales Manager",
    name: "Eric Miller",
    address: "606 Cedar Blvd, Dreamland",
  },
  {
    email: "tiffany.johnson@example.com",
    position: "Product Owner",
    name: "Tiffany Johnson",
    address: "707 Spruce St, Star City",
  },
  {
    email: "robert.lee@example.com",
    position: "Systems Analyst",
    name: "Robert Lee",
    address: "808 Walnut St, Fictional",
  },
  {
    email: "karen.hernandez@example.com",
    position: "HR Manager",
    name: "Karen Hernandez",
    address: "909 Cherry Ln, Paradise",
  },
  {
    email: "simon.ross@example.com",
    position: "DevOps Engineer",
    name: "Simon Ross",
    address: "110 Pine Ct, Wonderland",
  },
];
const Users = () => {
  const [active, setActive] = React.useState(1);
  const [rowPerPage] = useState(5);
  const [totalPage] = useState(Math.ceil(TABLE_ROWS.length / rowPerPage));

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === totalPage) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };
  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-8">
        <div>
          <Typography variant="h5" color="blue-gray">
            Employees list
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button className="flex items-center gap-3" size="sm">
            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
          </Button>
        </div>
      </div>
      <Card className="h-full w-full overflow-auto max-w-[calc(100vw-48px)] px-6">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-gray-300 pb-4 pt-10">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.slice(
              (active - 1) * rowPerPage,
              active * rowPerPage
            ).map(({ name, address, email, position }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "py-4" : "py-4 border-b border-gray-300";

              return (
                <tr key={name} className="hover:bg-gray-50">
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {position}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {address}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          active={active}
          next={next}
          prev={prev}
          getItemProps={getItemProps}
          totalPage={totalPage}
        />
      </Card>
    </div>
  );
};

export default Users;
