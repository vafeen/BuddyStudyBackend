import { SubTitleChapter } from "../../styles";
import DualRange from "../dual-range/DualRange";
import TagsComponent from "../tags/TagsComponent";
import { SidePanelClear, SidePanelFilter, SidePanelFilterTitle, SidePanelHeader, SidePanelOption, SidePanelSelect, SidePanelWrapper } from "./styles";

export default function SidePanel() {
    return (
        <SidePanelWrapper>
            <SidePanelHeader>
                <SubTitleChapter>Фильтры</SubTitleChapter>
                <SidePanelClear>очистить</SidePanelClear>
            </SidePanelHeader>
            <SidePanelFilter>
                <SidePanelFilterTitle>Пол</SidePanelFilterTitle>
                <SidePanelSelect>
                    <SidePanelOption>Не указан</SidePanelOption>
                    <SidePanelOption>Мужской</SidePanelOption>
                    <SidePanelOption>Женский</SidePanelOption>
                </SidePanelSelect>
            </SidePanelFilter>

            <SidePanelFilter>
                <SidePanelFilterTitle>Возраст</SidePanelFilterTitle>
                <DualRange />
            </SidePanelFilter>
            <TagsComponent />
        </SidePanelWrapper>
    )
}
