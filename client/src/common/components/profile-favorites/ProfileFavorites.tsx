import { useNavigate } from 'react-router-dom'
import { ProfileBlockContent, ProfileBlockStill, ProfileBlockTitle, ProfileBlockWrapper } from '../../styles';

export default function ProfileFavorites() {
    const navigate = useNavigate();
    return (
        <ProfileBlockWrapper>
            <ProfileBlockTitle>Избранное</ProfileBlockTitle>
            <ProfileBlockContent>
            </ProfileBlockContent>
            <ProfileBlockStill onClick={() => navigate("/user/all")}>Показать все</ProfileBlockStill>
        </ProfileBlockWrapper>
    )
}
