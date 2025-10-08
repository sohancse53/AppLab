import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Install from "../Pages/Install";
import LoadingSpinner from "../components/LoadingSpinner";
import PageNotFound from "../components/PageNotFound";
import AppNotFound from "../components/AppNotFound";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        hydrateFallbackElement:<LoadingSpinner/>,
        errorElement:<PageNotFound/>,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"apps",
                Component:Apps,
                
            },
           
            {
                path:"apps/:appId",
                Component:AppDetails,
                

            },
            {
                path:"install",
                Component:Install
            }
        ]
    }
])


export default router