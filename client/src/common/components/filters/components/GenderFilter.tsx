import { ChangeEvent } from 'react';
import { AdsFiltersOption, AdsFiltersSelect, AdsItemFilters, AdsSubTitleFilters } from '../styles';
import { useActions } from '../../../../store/actions';
import { GenderType } from '../../../../store/reducers/user/userInfoSlice';
import { useAppSelector } from '../../../hooks/useAppSelector';

export default function GenderFilter() {
    const {gender} = useAppSelector(state => state.filtersReducer);
    const {setGenderFilter} = useActions();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value, e.target.value === 'none')
        if (e.target.value === 'none') setGenderFilter(null);
        else setGenderFilter(e.target.value as GenderType);
    }

    return (
        <AdsItemFilters>
            <AdsSubTitleFilters>Пол:</AdsSubTitleFilters>
            <AdsFiltersSelect value={gender ? gender : 'none'} onChange={handleChange}>
                <AdsFiltersOption value='none'>Не указан</AdsFiltersOption>
                <AdsFiltersOption value='male'>Мужской</AdsFiltersOption>
                <AdsFiltersOption value='female'>Женский</AdsFiltersOption>
            </AdsFiltersSelect>
        </AdsItemFilters>
    )
}
