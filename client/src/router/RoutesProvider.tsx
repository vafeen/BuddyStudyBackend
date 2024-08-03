import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom"
import Main from "../pages/Main";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Adv from "../pages/Advertisement/Adv";
import AdsAll from "../pages/AdsAll/AdsAll";
import Auth from "../common/components/auth/Auth";
import Reg from "../common/components/auth/components/Reg";
import Login from "../common/components/auth/components/Login";

export default function RoutesProvider() {
    const isAuthUser = true;

    const unAuthorizedProvider = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Outlet />}>
                    <Route path="/auth/" element={<Auth />}>
                        <Route path="reg" element={<Reg />} />
                        <Route path="login" element={<Login />} />
                    </Route>
                </Route>
            </>
        )
    );

    const authorizedProvider = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Outlet />}>
                    <Route path="user/" element={<Main />} >
                        <Route path="home" element={<Home />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="adv" element={<Adv />} />
                        <Route path="all" element={<AdsAll />} />
                    </Route>
                </Route>
                <Route path="error" element={<div>Error 404</div>} />
                <Route path='*' element={<>error</>} />
            </>
        )
    );

    return <RouterProvider router={isAuthUser ? authorizedProvider : unAuthorizedProvider} />;
}
