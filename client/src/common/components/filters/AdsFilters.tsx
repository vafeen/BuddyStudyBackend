import DualRange from "../dual-range/DualRange";
import TagsComponent from "../tags/TagsComponent";
import { AdsContentFilters, AdsFiltersButton, AdsFiltersButtons, AdsFiltersOption, AdsFiltersSelect, AdsFiltersWrapper, AdsItemFilters, AdsMainFilters, AdsSubTitleFilters, AdsTagsFilters, AdsTitleFilters } from "./styles";

export default function AdsFilters() {
    return (
        <AdsFiltersWrapper>
            <AdsTitleFilters>Фильтры</AdsTitleFilters>
            <AdsContentFilters>
                <AdsMainFilters>
                    <AdsItemFilters>
                        <AdsSubTitleFilters>Пол:</AdsSubTitleFilters>
                        <AdsFiltersSelect>
                            <AdsFiltersOption>Не указан</AdsFiltersOption>
                            <AdsFiltersOption>Мужской</AdsFiltersOption>
                            <AdsFiltersOption>Женский</AdsFiltersOption>
                        </AdsFiltersSelect>
                    </AdsItemFilters>
                    <AdsItemFilters>
                        <AdsSubTitleFilters>Возраст:</AdsSubTitleFilters>
                        <DualRange />
                    </AdsItemFilters>
                </AdsMainFilters>
                <AdsTagsFilters>
                    <TagsComponent />
                </AdsTagsFilters>
            </AdsContentFilters>
            <AdsFiltersButtons>
                <AdsFiltersButton>Очистить</AdsFiltersButton>
                <AdsFiltersButton>Применить</AdsFiltersButton>
            </AdsFiltersButtons>
        </AdsFiltersWrapper>
    )
}