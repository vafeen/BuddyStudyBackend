import  { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

export default function RoutesProvider() {
    const authorizedProvider = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<></>}>
                    <Route path="user/" element={<></>} >
                    </Route>
                </Route>
                <Route path="error" element={<div>Error 404</div>} />
                <Route path='*' element={<>error</>} />
            </>
        )
    );

    return <RouterProvider router={authorizedProvider} />;
}
