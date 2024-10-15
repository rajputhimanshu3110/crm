import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function Pagination({ active, next, prev, getItemProps, totalPage }) {
  function Pages(n) {
    var Page = [];
    for (let i = 1; i <= n; i++) {
      Page.push(<IconButton {...getItemProps(i)}>{i}</IconButton>);
    }
    return Page;
  }
  return (
    <div className="flex">
      <div className="flex justify-between items-center gap-4 py-2">
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-2">{Pages(totalPage)}</div>
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === totalPage}
        >
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex w-10"></div>
    </div>
  );
}
