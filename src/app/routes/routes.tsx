import { createBrowserRouter } from "react-router";
import HomePage from "../../pages/home-page/HomePage";
import Layout from "../layout/Layout";


export const router = createBrowserRouter(
    [
        {
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                }
            ]
        }
        
    ]
)