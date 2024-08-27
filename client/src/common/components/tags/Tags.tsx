import { TagsEnumeration } from './styles'
import Tag from './Tag'

interface TagsProps {
    tags: string[] | null
}

export default function Tags({tags}: TagsProps) {
    return (
        <TagsEnumeration>
            {tags && tags.map((elem, i) => <Tag key={i} tagName={elem} />)}
        </TagsEnumeration>
    )
}
