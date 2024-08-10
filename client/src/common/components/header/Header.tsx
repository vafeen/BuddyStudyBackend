import { useAppSelector } from "../../hooks/useAppSelector";
import { CreateButton, Logo } from "../../styles";
import { HeaderAvatar, HeaderDetails, HeaderDetailsProfile, HeaderWrapper, HeadetButtonExit } from "./styles";

const profileLink = "/user/profile";
const homeLink = "/user/home";

export default function Header() {
    const user = useAppSelector(state => state.userReducer);

    return (
        <HeaderWrapper>
            <Logo to={homeLink}>BuddyStudy</Logo>
            {(user.isAuth && user.isInfo) &&
                <HeaderDetails>
                    <CreateButton>Создать</CreateButton>
                    <HeaderDetailsProfile>
                        <HeaderAvatar to={profileLink}></HeaderAvatar>
                        <HeadetButtonExit>выход</HeadetButtonExit>
                    </HeaderDetailsProfile>
                </HeaderDetails>
            }
        </HeaderWrapper>
    )
}
