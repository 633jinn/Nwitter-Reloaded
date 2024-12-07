import { Outlet } from "react-router-dom";

// Outlet은 App.tsx의 children을 url에 맞게 보여준다.
export default function Layout() {
    return <>
        <h2>layout</h2>
        <Outlet />
    </>
}