import { AdsCardAuthor, AdsCardAuthorName, AdsCardHeaderWrapper, AdsCardTitle } from '../styles'
import AvatarComponent from '../../choice-avatars/AvatarComponent'

interface AdsCardHeaderProps {
    color: string,
    title: string,
    name: string
}

export default function AdsCardHeader({title, name, color}: AdsCardHeaderProps) {
    return (
        <AdsCardHeaderWrapper style={{ backgroundColor: `${color}` }}>
            <AdsCardTitle>{title}</AdsCardTitle>
            <AdsCardAuthor>
                <AvatarComponent size="20px" id={2222} />
                <AdsCardAuthorName>{name}</AdsCardAuthorName>
            </AdsCardAuthor>
        </AdsCardHeaderWrapper>
    )
}
