import { AdsFiltersOption, AdsFiltersSelect, AdsItemFilters, AdsSubTitleFilters } from '../styles'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useActions } from '../../../../store/actions';
import { ChangeEvent } from 'react';
import { GenderType } from '../../../../store/reducers/user/userInfoSlice';

export default function GenderFilter() {
    const {gender} = useAppSelector(state => state.filtersReducer);
    const {setGenderFilter} = useActions();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setGenderFilter(e.target.value as GenderType | 'none');
    }

    return (
        <AdsItemFilters>
            <AdsSubTitleFilters>Пол:</AdsSubTitleFilters>
            <AdsFiltersSelect value={gender} onChange={handleChange}>
                <AdsFiltersOption value='none'>Не указан</AdsFiltersOption>
                <AdsFiltersOption value='male'>Мужской</AdsFiltersOption>
                <AdsFiltersOption value='female'>Женский</AdsFiltersOption>
            </AdsFiltersSelect>
        </AdsItemFilters>
    )
}
