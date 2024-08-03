import { useNavigate } from 'react-router-dom'
import { ProfileBlockContent, ProfileBlockStill, ProfileBlockTitle, ProfileBlockWrapper } from '../../styles'
import AdsCard from '../ads-card/AdsCard'

export default function ProfileFavorites() {
    const navigate = useNavigate();
    return (
        <ProfileBlockWrapper>
            <ProfileBlockTitle>Избранное</ProfileBlockTitle>
            <ProfileBlockContent>
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
            </ProfileBlockContent>
            <ProfileBlockStill onClick={() => navigate("/user/all")}>Показать все</ProfileBlockStill>
        </ProfileBlockWrapper>
    )
}
