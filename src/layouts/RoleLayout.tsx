import { Badge, Box } from "@mui/material";
import Topbar from "./Topbar";
import { useTheme } from "@emotion/react";
import Orders from "../features/shared/orders/Orders";
import AuthLayout from "../features/shared/auth/AuthLayout";
import { useAuthStore } from "../authstore/store";
import { CartLayout } from "../features/employee/cart/CartLayout";
import { MenuLayout } from "../features/shared/menu/MenuLayout";
import { EmployeeLayout } from "./EmployeeLayout";
import { PantryboyLayout } from "./PantryboyLayout";

const BaseLayout = ({ path }: any) => {
    const role = useAuthStore((state) => state.role);
    return (
        <>
            {role === "employee" && <EmployeeLayout path={path} />}
            {role === "pantryboy" && <PantryboyLayout path={path} />}
        </>
    );
};

export default BaseLayout;
// this is comment
