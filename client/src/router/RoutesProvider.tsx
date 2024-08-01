import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom"
import Main from "../pages/Main";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";

export default function RoutesProvider() {
    const authorizedProvider = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Outlet />}>
                    <Route path="user/" element={<Main />} >
                        <Route path="home" element={<Home />} />
                        <Route path="profile" element={<Profile />}/>
                    </Route>
                </Route>
                <Route path="error" element={<div>Error 404</div>} />
                <Route path='*' element={<>error</>} />
            </>
        )
    );

    return <RouterProvider router={authorizedProvider} />;
}
