import { useNavigate } from 'react-router-dom'
import { CreateButton, ProfileBlockContent, ProfileBlockHeader, ProfileBlockStill, ProfileBlockWrapper, SubTitleChapter } from '../../styles'
import AdsCard from '../ads-card/AdsCard'

export default function ProfileMyAds() {
    const navigate = useNavigate();
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
            <ProfileBlockStill onClick={() => navigate("/user/all")}>Показать все</ProfileBlockStill>
        </ProfileBlockWrapper>
    )
}
