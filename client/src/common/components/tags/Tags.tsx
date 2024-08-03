import { TagsWrapper } from "./styles";
import Tag from "./Tag";

const tagsList = ["английский", "напарник", "скромный","Воронеж"];

export default function Tags() {
    return (
        <TagsWrapper>
            {tagsList.slice(0,3).map((elem, i) => <Tag tagName={elem} />)}
        </TagsWrapper>
    )
}
