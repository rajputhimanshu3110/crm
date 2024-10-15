export default routes = [
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