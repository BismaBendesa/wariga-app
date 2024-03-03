// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import NavigasiBar from "../../components/Navbar/NavigasiBar";
import Dashboard from "../../components/Dashboard/Dashboard";

export default function DashboardPage() {
    return (
        <>
            <NavigasiBar />
            <Dashboard />
            {/* <Dashboard /> */}
        </>
    );
}
