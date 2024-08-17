import { ProfileWrapper } from "./styles";
import ProfileInfo from "../../common/components/profile-info/ProfileInfo";
import ProfileDetails from "../../common/components/profile-details/ProfileDetails";
import ProfileMyAds from "../../common/components/profile-my-ads/ProfileMyAds";
import ProfileFavorites from "../../common/components/profile-favorites/ProfileFavorites";
import { useAppSelector } from "../../common/hooks/useAppSelector";

export default function Profile() {
    const userInfo = useAppSelector(state => state.userInfoReducer);

    return (
        <>
            {
                userInfo.name.length ?
                    <ProfileWrapper>
                        <ProfileInfo info={userInfo} />
                        <ProfileDetails />
                        <ProfileMyAds />
                        <ProfileFavorites />
                    </ProfileWrapper>
                    : 'Пользователь не авторизован'
            }
        </>
    )
}
