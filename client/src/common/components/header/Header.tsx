import { CreateButton } from "../../styles";
import { HeaderAvatar, HeaderDetails, HeaderDetailsProfile, HeaderWrapper, HeadetButtonExit, Logo } from "./styles";

export default function Header() {
    return (
        <HeaderWrapper>
            <Logo>BuddyStudy</Logo>
            <HeaderDetails>
                <CreateButton>Создать</CreateButton>
                <HeaderDetailsProfile>
                    <HeaderAvatar></HeaderAvatar>
                    <HeadetButtonExit>выход</HeadetButtonExit>
                </HeaderDetailsProfile>
            </HeaderDetails>
        </HeaderWrapper>
    )
}
