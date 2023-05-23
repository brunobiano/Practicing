import { useRoutes } from "react-router-dom"

import { Home } from "../pages/home";
import { PhotoGrid } from "../pages/photoGrid";
import { EachPhoto } from "../pages/eachPhoto";

export const MainRoutes = () => {
    return useRoutes([
        { path:'/', element: <Home />},
        { path: '/album/:title', element: <PhotoGrid />},
        { path: '/album/photo', element: <EachPhoto />}
    ])
}