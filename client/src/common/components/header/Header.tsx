import { CreateButton } from "../../styles";
import { HeaderAvatar, HeaderDetails, HeaderDetailsProfile, HeaderWrapper, HeadetButtonExit, Logo } from "./styles";

const profileLink = "/user/profile"

export default function Header() {
    return (
        <HeaderWrapper>
            <Logo>BuddyStudy</Logo>
            <HeaderDetails>
                <CreateButton>Создать</CreateButton>
                <HeaderDetailsProfile>
                    <HeaderAvatar to={profileLink}></HeaderAvatar>
                    <HeadetButtonExit>выход</HeadetButtonExit>
                </HeaderDetailsProfile>
            </HeaderDetails>
        </HeaderWrapper>
    )
}
