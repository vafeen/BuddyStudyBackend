import { TagWrapper } from './styles'

interface TagProps {
    tagName: string
}

export default function Tag({tagName}: TagProps) {
    return (
        <TagWrapper>#{tagName}</TagWrapper>
    )
}
