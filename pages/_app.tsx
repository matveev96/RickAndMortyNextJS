import "@/styles/globals.css";
import type {AppProps} from "next/app";
import React, {type ReactElement, type ReactNode, useState} from "react";
import type {NextPage} from "next";
import {QueryClient, QueryClientProvider, hydrate} from "@tanstack/react-query";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const queryClient = new QueryClient();

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
    const [queryClientState] = useState(pageProps.dehydratedState);

    if (queryClientState) {
        hydrate(queryClient, queryClientState);
    }

    const getLayout = Component.getLayout ?? ((page) => page);


    return getLayout(
        <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
        </QueryClientProvider>
    );
}
