import Head from "next/head";
import Home from "../screens/home/Home";

export default function HomeScreen() {
    return (
        <div>
            <Head>
                <title>Tomas Boda | Portfolio - Web developer and UI designer</title>
                <meta name="description" content="Web developer and user interface designer based in Bratislava, Slovakia who focuses on delivering dynamic websites with seamless user experience."></meta>
                <meta lang="en"></meta>
            </Head>

            <Home />
        </div>
    )
}