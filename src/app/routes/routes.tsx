import { createBrowserRouter } from "react-router";
import HomePage from "../../pages/home-page/HomePage";
import PostPage from "../../pages/posts-page/PostsPage";
import Layout from "../layout/Layout";


export const router = createBrowserRouter(
    [
        {
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: "/posts/:postIndex",
                    element: <PostPage />
                }
            ]
        }
        
    ]
)