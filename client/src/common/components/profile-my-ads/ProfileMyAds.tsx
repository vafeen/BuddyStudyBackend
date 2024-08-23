import { useNavigate } from 'react-router-dom'
import { CreateButton, ProfileBlockContent, ProfileBlockHeader, ProfileBlockStill, ProfileBlockWrapper, SubTitleChapter } from '../../styles'

export default function ProfileMyAds() {
    const navigate = useNavigate();
    return (
        <ProfileBlockWrapper>
            <ProfileBlockHeader>
                <SubTitleChapter>Мои обьявления</SubTitleChapter>
                <CreateButton>Создать</CreateButton>
            </ProfileBlockHeader>
            <ProfileBlockContent>
            </ProfileBlockContent>
            <ProfileBlockStill onClick={() => navigate("/user/all")}>Показать все</ProfileBlockStill>
        </ProfileBlockWrapper>
    )
}
