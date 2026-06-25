import { createBrowserRouter } from "react-router";
import HomePage from "../../pages/home-page/HomePage";
import PostPage from "../../pages/post-page/PostPage";
import Layout from "../layout/Layout";
import LoginPage from "../../pages/login-page/LoginPage";


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
                },

                {
                    path: "/login",
                    element: <LoginPage />
                }
            ]
        }
        
    ]
)