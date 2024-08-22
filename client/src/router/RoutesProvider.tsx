import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom"
import Main from "../pages/Main";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Adv from "../pages/Advertisement/Adv";
import AdsAll from "../pages/AdsAll/AdsAll";
import { useAppSelector } from "../common/hooks/useAppSelector";

export default function RoutesProvider() {
    const user = useAppSelector(state => state.userReducer);

    const provider = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Outlet />}>
                    <Route path="user/" element={<Main />} >
                        <Route path="home" element={<Home />} />
                        {user.isInfo &&
                            <>
                                <Route path="profile" element={<Profile />} />
                                <Route path="adv" element={<Adv />} />
                                <Route path="all" element={<AdsAll />} />
                            </>
                        }
                    </Route>
                </Route>
                <Route path="error" element={<div>Error 404</div>} />
                <Route path='*' element={<>error</>} />
            </>
        )
    );

    return <RouterProvider router={provider} />;
}
