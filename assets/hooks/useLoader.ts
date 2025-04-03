import {useRouter} from "next/router";
import {useEffect} from "react";
import {NProgress} from "nprogress-v2";


export const useLoader = () => {

    const router = useRouter();

    useEffect(() => {
        const startProgress = () => NProgress.start()
        const endProgress = () => NProgress.done()

        router.events.on('routeChangeStart', startProgress)
        router.events.on('routeChangeComplete', endProgress)
        router.events.on('routeChangeError', endProgress)
        return () => {
            router.events.off('routeChangeStart', startProgress)
            router.events.off('routeChangeComplete', endProgress)
            router.events.off('routeChangeError', endProgress)
        }
    }, [router])

};

