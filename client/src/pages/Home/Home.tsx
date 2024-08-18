import Header from "../../common/components/header/Header";
import Ads from "./components/ads/Ads";
import { HomeContent, HomeWrapper } from "./styles";

export default function Home() {

    return (
        <HomeWrapper>
            <Header />
            <HomeContent>
                <Ads />
            </HomeContent>
        </HomeWrapper>
    )
}
