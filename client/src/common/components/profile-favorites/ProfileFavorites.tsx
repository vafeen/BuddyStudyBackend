import { useNavigate } from 'react-router-dom'
import { ProfileBlockContent, ProfileBlockStill, ProfileBlockTitle, ProfileBlockWrapper } from '../../styles';
import { useGetFavouritesApiQuery } from '../../../store/reducers/favourites/favouritesApi';
import AdsCard from '../ads-card/AdsCard';

export default function ProfileFavorites() {
    const navigate = useNavigate();
    const {data: favourites} = useGetFavouritesApiQuery();

    return (
        <ProfileBlockWrapper>
            <ProfileBlockTitle>Избранное</ProfileBlockTitle>
            <ProfileBlockContent>
                {favourites && favourites.map(elem => <AdsCard key={elem.id} adv={elem} />)}
            </ProfileBlockContent>
            <ProfileBlockStill onClick={() => navigate("/user/all")}>Показать все</ProfileBlockStill>
        </ProfileBlockWrapper>
    )
}