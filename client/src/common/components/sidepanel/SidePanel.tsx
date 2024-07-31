import { SubTitleChapter } from "../../styles";
import DualRange from "../dual-range/DualRange";
import { SidePanelAddTag, SidePanelClear, SidePanelFilter, SidePanelFilterTitle, SidePanelHeader, SidePanelInputTag, SidePanelOption, SidePanelSelect, SidePanelTags, SidePanelWrapper } from "./styles";

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

            <SidePanelFilter>
                <SidePanelFilterTitle>Теги</SidePanelFilterTitle>
                <SidePanelTags>
                    <SidePanelInputTag placeholder="Введите тег..." />
                    <SidePanelAddTag>Добавить</SidePanelAddTag>
                </SidePanelTags>
            </SidePanelFilter>
        </SidePanelWrapper>
    )
}
