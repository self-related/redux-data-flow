import { createBrowserRouter } from "react-router";
import HomePage from "../../pages/home-page/HomePage";
import PostPage from "../../pages/post-page/PostPage";
import Layout from "../layout/Layout";
import LoginPage from "../../pages/login-page/LoginPage";
import AuthRouter from "../../features/auth/routes/AuthRouter";


export const router = createBrowserRouter(
    [
        {
            element: <Layout />,
            children: [
                {
                    element: <AuthRouter />,
                    children: [
                        {
                            index: true,
                            element: <HomePage />,
                        },

                        {
                            path: "/posts/:postIndex",
                            element: <PostPage />
                        },
                    ]
                },

                {
                    path: "/login",
                    element: <LoginPage />
                }
            ]
        }
        
    ]
)