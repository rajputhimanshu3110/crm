import React from "react";
import {
  Select,
  Option,
  Card,
  Typography,
  Input,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";

const TABLE_HEAD = ["Name", "Role", "Email", "Location"];

const TABLE_ROWS = [
  {
    name: "Mary Smith",
    role: "Project Manager",
    email: "mary.smith@example.com",
    location: "New York, USA",
  },
  {
    name: "Bob Johnson",
    role: "Lead Developer",
    email: "bob.johnson@example.com",
    location: "London, UK",
  },
  {
    name: "Carol White",
    role: "UX Designer",
    email: "carol.white@example.com",
    location: "Berlin, Germany",
  },
  {
    name: "David Brown",
    role: "QA Engineer",
    email: "david.brown@example.com",
    location: "Sydney, Australia",
  },
];

const MasterData = () => {
  let { type } = useParams();
  console.log(type);
  return (
    <>
      <div className="flex flex-wrap justify-between mb-2">
        <div className="w-72 my-1">
          <Select label="Select Organisation">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
          </Select>
        </div>
        <div className="w-72 my-1">
          <Input label="Search Item" icon={<i className="fas fa-heart" />} />
        </div>
      </div>

      <Card className="h-full w-full overflow-auto px-6">
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
            {TABLE_ROWS.map(({ name, role, email, location }, index) => {
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
                      {role}
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
                      {location}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default MasterData;
