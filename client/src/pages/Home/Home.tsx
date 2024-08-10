import Header from "../../common/components/header/Header";
import SidePanel from "../../common/components/sidepanel/SidePanel";
import Ads from "./components/ads/Ads";
import { HomeContent, HomeWrapper } from "./styles";

export default function Home() {

    return (
        <HomeWrapper>
            <Header />
            <HomeContent>
                <SidePanel />
                <Ads />
            </HomeContent>
        </HomeWrapper>
    )
}
