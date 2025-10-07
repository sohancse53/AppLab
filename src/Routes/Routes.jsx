import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Install from "../Pages/Install";
import LoadingSpinner from "../components/LoadingSpinner";

const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        HydrateFallback:LoadingSpinner,
        children:[
            {
                index:true,
                path:'/',
                Component:Home
            },
            {
                path:"apps",
                Component:Apps
            },
            {
                path:"install",
                Component:Install
            }
        ]
    }
])


export default router