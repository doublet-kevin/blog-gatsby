import * as React from "react"
import Layout from "../components/layout";
import Hero from "../components/hero";

export default function HomePage() {
    return (
        <Layout>
            <Hero></Hero>
        </Layout>
    )
}

export const Head = () => <title>Home Page</title>
