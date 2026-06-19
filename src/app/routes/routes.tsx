import { createBrowserRouter } from "react-router";
import HomePage from "../../pages/home-page/HomePage";


export const router = createBrowserRouter(
    [
        {
            index: true,
            element: <HomePage />,
        } 
    ]
)