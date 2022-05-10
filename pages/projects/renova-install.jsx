import Head from "next/head";
import Project from "../../screens/project/Project";

import { projects } from "../../configuration/Data";

export default function ProjectScreen() {
    return (
        <div>
            <Head>
                <title>Renova Case study | Tomáš Boďa</title>
                <meta lang="en"></meta>
            </Head>

            <Project project={projects[3]} />
        </div>
    )
}