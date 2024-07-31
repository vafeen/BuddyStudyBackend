import Header from "../../common/components/header/Header";
import SidePanel from "../../common/components/sidepanel/SidePanel";
import { HomeContent, HomeWrapper } from "./styles";

export default function Home() {
    return (
        <HomeWrapper>
            <Header />
            <HomeContent>
                <SidePanel />
            </HomeContent>
        </HomeWrapper>
    )
}
