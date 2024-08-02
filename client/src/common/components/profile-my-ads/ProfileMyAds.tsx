import { CreateButton, ProfileBlockContent, ProfileBlockHeader, ProfileBlockStill, ProfileBlockWrapper, SubTitleChapter } from '../../styles'
import AdsCard from '../ads-card/AdsCard'

export default function ProfileMyAds() {
    return (
        <ProfileBlockWrapper>
            <ProfileBlockHeader>
                <SubTitleChapter>Мои обьявления</SubTitleChapter>
                <CreateButton>Создать</CreateButton>
            </ProfileBlockHeader>
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
