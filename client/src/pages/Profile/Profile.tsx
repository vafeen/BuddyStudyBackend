import { ProfileWrapper } from "./styles";
import ProfileInfo from "../../common/components/profile-info/ProfileInfo";
import ProfileDetails from "../../common/components/profile-details/ProfileDetails";
import ProfileMyAds from "../../common/components/profile-my-ads/ProfileMyAds";
import ProfileFavorites from "../../common/components/profile-favorites/ProfileFavorites";

export default function Profile() {
    return (
        <ProfileWrapper>
            <ProfileInfo />
            <ProfileDetails />
            <ProfileMyAds />
            <ProfileFavorites />
        </ProfileWrapper>
    )
}
