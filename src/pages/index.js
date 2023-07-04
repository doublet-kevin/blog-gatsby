import * as React from "react"
import Layout from "../components/layout";
import Hero from "../components/hero";
import HomeCategoryPost from "../components/home-category-post";
import HomeLastBlogpost from "../components/home-last-blogpost";

export default function HomePage() {
    return (
        <Layout>
            <Hero />
            <HomeLastBlogpost />
            <HomeCategoryPost />
            <HomeCategoryPost />
            <HomeCategoryPost />
        </Layout>
    )
}

export const Head = () => <title>Home Page</title>
