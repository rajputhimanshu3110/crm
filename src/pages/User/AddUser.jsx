import React from "react";
import {
  Button,
  Input,
  Typography,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
const AddUser = () => {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-8">
        <div>
          <Typography variant="h5" color="blue-gray">
            Add User/Employees
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            add new members here
          </Typography>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button className="flex items-center gap-3" size="sm">
            Save
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="min-w-80 w-[50%] p-2">
          <Input label="Name" />
        </div>
        <div className="min-w-80 w-[50%] p-2">
          <Input label="Email" />
        </div>
        <div className="min-w-80 w-[50%] p-2">
          <Input label="Mobile" />
        </div>
        <div className="min-w-80 w-[50%] p-2">
          <Select label="Level of Education">
            <Option>Bachelor</Option>
            <Option>Masters</Option>
          </Select>
        </div>
        <div className="min-w-80 w-[50%] p-2">
          <Select label="Degree">
            <Option>Bachelor of Technology</Option>
            <Option>Masters of Technology</Option>
          </Select>
        </div>
        <div className="min-w-80 w-[50%] p-2">
          <Input label="Aadhar Number" />
        </div>
        <div className="min-w-80 w-[50%] p-2">
          <Textarea label="Full Address" />
        </div>
        <div className="min-w-80 w-[50%] p-2"></div>
        <div className="min-w-80 w-[50%] p-2">
          <Input type="date" label="DOB" />
        </div>
        <div className="min-w-80 w-[50%] p-2">
          <Select label="Gender">
            <Option>Male</Option>
            <Option>Female</Option>
          </Select>
        </div>
        <div className="min-w-80 w-[50%] p-2">
          <Select label="Gender">
            <Option>Male</Option>
            <Option>Female</Option>
          </Select>
        </div>
        <div className="min-w-80 w-[50%] p-2">
          <Select label="Position">
            <Option>Front End Developer</Option>
            <Option>Manager</Option>
          </Select>
        </div>

        <div className="min-w-80 w-[50%] p-2">
          <Select label="Marital Status">
            <Option>Married</Option>
            <Option>Un-Married</Option>
          </Select>
        </div>
        <div className="min-w-80 w-[50%] p-2">
          <Select label="Access Level">
            <Option>None</Option>
            <Option>Client</Option>
            <Option>Admin</Option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
