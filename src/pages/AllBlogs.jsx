import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/blogs/Hero";
import SocialPosts from "../components/landing/SocialPosts";
import AllBlogs from "../components/blogs/AllBlogs";

const Blogs = () => {
    return (
        <Layout>
            <Hero />
            <AllBlogs />
            <SocialPosts bhaistatichnmeto />
        </Layout>
    );
};

export default Blogs;
