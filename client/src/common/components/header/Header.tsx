import { useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { CreateButton, Logo } from "../../styles";
import { HeaderAvatar, HeaderDetails, HeaderDetailsProfile, HeaderWrapper, HeadetButtonExit } from "./styles";
import CreateAdv from "../create-adv/CreateAdv";

const profileLink = "/user/profile";
const homeLink = "/user/home";

export default function Header() {
    const [isCreate, setIsCreate] = useState(false);
    const user = useAppSelector(state => state.userReducer);

    return (
        <HeaderWrapper>
            <Logo to={homeLink}>BuddyStudy</Logo>
            {(user.isAuth && user.isInfo) &&
                <HeaderDetails>
                    <CreateButton onClick={() => setIsCreate(true)}>Создать</CreateButton>
                    <HeaderDetailsProfile>
                        <HeaderAvatar to={profileLink}></HeaderAvatar>
                        <HeadetButtonExit>выход</HeadetButtonExit>
                    </HeaderDetailsProfile>
                </HeaderDetails>
            }
            {isCreate && <CreateAdv setIsCreate={setIsCreate} />}
        </HeaderWrapper>
    )
}
