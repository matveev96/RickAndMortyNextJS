import type {NextPage} from "next";
import type {PropsWithChildren} from "react";
import {BaseLayout} from "@/components/BaseLayout/BaseLayout";

const Layout: NextPage<PropsWithChildren> = ({children}) => {
    return <BaseLayout>{children}</BaseLayout>
}

export default Layout