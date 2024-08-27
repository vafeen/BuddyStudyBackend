import { AdsContentFilters, AdsFiltersButton, AdsFiltersButtons, AdsFiltersWrapper, AdsMainFilters, AdsTagsFilters, AdsTitleFilters, AdsTitleFiltersImg, AdsTitleFiltersWrapper } from "./styles";
import { useActions } from "../../../store/actions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useState } from "react";
import GenderFilter from "./components/GenderFilter";
import AgeFilter from "./components/AgeFilter";
import TagsComponent from "../tags/TagsComponent";
import Tags from "../tags/Tags";
import arrowDown from "../../icons/svg/arrow-down.svg";

export default function AdsFilters() {
    const { tags } = useAppSelector(state => state.filtersReducer);
    const { resetFilters, setTagsFilter } = useActions();

    const [isShow, setIsShow] = useState(false);

    const handleReset = () => {
        resetFilters();
    }

    const handleShow = () => {
        setIsShow(prev => !prev);
    }

    return (
        <AdsFiltersWrapper>
            <AdsTitleFiltersWrapper >
                <AdsTitleFilters>Фильтры</AdsTitleFilters>
                <AdsTitleFiltersImg
                    style={{ transform: isShow ? 'rotateX(180deg)' : 'none' }}
                    src={arrowDown}
                    onClick={handleShow} />
            </AdsTitleFiltersWrapper>
            {isShow &&
                <>
                    <AdsContentFilters>
                        <AdsMainFilters>
                            <GenderFilter />
                            <AgeFilter />
                        </AdsMainFilters>
                        <AdsTagsFilters>
                            <TagsComponent tags={tags} setTags={setTagsFilter} />
                            <Tags tags={tags} />
                        </AdsTagsFilters>
                    </AdsContentFilters>
                    <AdsFiltersButtons>
                        <AdsFiltersButton onClick={handleReset}>Очистить</AdsFiltersButton>
                    </AdsFiltersButtons>
                </>
            }
        </AdsFiltersWrapper>
    )
}