import { useState } from 'react';
import { AdvActionImg, AdvActionWrapper } from './styles';
import { useLocation } from 'react-router-dom';
import { useAddFavouritesMutation, useRemoveFavouritesMutation } from '../../../store/reducers/favourites/favouritesApi';
import heartImg from '../../icons/svg/heart.svg';
import heartRedImg from '../../icons/svg/heart-red.svg';
import binImg from '../../icons/svg/bin.svg';

// вынести в отдельный файл
const homeUrl = '/user/home';

interface FavouriteButtonProps {
    id: string
}

export default function AdvAction({ id }: FavouriteButtonProps) {
    const [isAdd, setIsAdd] = useState(false);
    const [addFavourites] = useAddFavouritesMutation();
    const [removeFavourites] = useRemoveFavouritesMutation();
    const { pathname } = useLocation();

    const handleFavourite = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.stopPropagation();
        addFavourites(id);
        setIsAdd(prev => !prev);
    }

    const handleRemove = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.stopPropagation();
        removeFavourites(id)
    }

    return (
        <AdvActionWrapper>
            {pathname === homeUrl ?
                <AdvActionImg
                    onClick={handleFavourite}
                    src={isAdd ? heartRedImg : heartImg}
                />
                :
                <AdvActionImg
                    onClick={handleRemove}
                    src={binImg}
                />
            }
        </AdvActionWrapper>
    )
}
