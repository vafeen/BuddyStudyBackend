import { Outlet } from "react-router-dom";
import { Container } from "../common/styles";

export default function Main() {
    return (
        <Container>
            <Outlet/>
        </Container>
    )
}
