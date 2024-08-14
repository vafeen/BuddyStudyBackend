import { TagsEnumeration } from './styles'
import Tag from './Tag'

interface TagsProps {
    tags: string[]
}

export default function Tags({tags}: TagsProps) {
    return (
        <TagsEnumeration>
            {tags.map((elem, i) => <Tag key={i} tagName={elem} />)}
        </TagsEnumeration>
    )
}
