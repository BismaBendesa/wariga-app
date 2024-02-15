// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import NavigasiBar from "./Navbar/NavigasiBar";
import Dashboard from "./Dashboard/Dashboard";

export default function DashboardPage() {
    return (
        <>
            <NavigasiBar />
            <Dashboard />
            {/* <Dashboard /> */}
        </>
    );
}
