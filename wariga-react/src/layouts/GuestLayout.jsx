// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";

export default function GuestLayout() {
    return (
        <div>
            <Outlet />
        </div>
    );
}
