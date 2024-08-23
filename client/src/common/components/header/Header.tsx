import { useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { CreateButton, Logo } from "../../styles";
import { HeaderAvatarWrapper, HeaderDetails, HeaderDetailsProfile, HeaderWrapper, HeadetButtonExit } from "./styles";
import CreateAdv from "../create-adv/CreateAdv";
import AvatarComponent from "../choice-avatars/AvatarComponent";

const profileLink = "/user/profile";
const homeLink = "/user/home";

export default function Header() {
    const [isCreate, setIsCreate] = useState(false);
    const user = useAppSelector(state => state.userReducer);
    const {avatarId} = useAppSelector(state => state.userInfoReducer);

    return (
        <HeaderWrapper>
            <Logo to={homeLink}>BuddyStudy</Logo>
            {(user.isAuth && user.isInfo) &&
                <HeaderDetails>
                    <CreateButton onClick={() => setIsCreate(true)}>Создать</CreateButton>
                    <HeaderDetailsProfile>
                        <HeaderAvatarWrapper to={profileLink}>
                            <AvatarComponent id={avatarId} size={'30px'} />
                        </HeaderAvatarWrapper>
                        <HeadetButtonExit>выход</HeadetButtonExit>
                    </HeaderDetailsProfile>
                </HeaderDetails>
            }
            {isCreate && <CreateAdv setIsCreate={setIsCreate} />}
        </HeaderWrapper>
    )
}
