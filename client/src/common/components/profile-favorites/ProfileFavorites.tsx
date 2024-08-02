import { ProfileBlockContent, ProfileBlockStill, ProfileBlockTitle, ProfileBlockWrapper } from '../../styles'
import AdsCard from '../ads-card/AdsCard'

export default function ProfileFavorites() {
    return (
        <ProfileBlockWrapper>
            <ProfileBlockTitle>Избранное</ProfileBlockTitle>
            <ProfileBlockContent>
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
            </ProfileBlockContent>
            <ProfileBlockStill>Показать все</ProfileBlockStill>
        </ProfileBlockWrapper>
    )
}
