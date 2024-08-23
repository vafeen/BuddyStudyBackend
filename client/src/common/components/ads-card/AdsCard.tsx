import { AdvProps } from "../../../store/reducers/ads/adsApi";
import AvatarComponent from "../choice-avatars/AvatarComponent";
import Tags from "../tags/Tags";
import { AdsCardAuthor, AdsCardAuthorName, AdsCardHeader, AdsCardLink, AdsCardTags, AdsCardTagsTitle, AdsCardTitle, AdsCardWrapper } from "./styles";

interface AdsCardProps {
    adv: AdvProps
}

export default function AdsCard({ adv }: AdsCardProps) {
    const { title, name, tags, colorHeader } = adv;
    return (
        <AdsCardLink to={''}>
            <AdsCardWrapper>
                <AdsCardHeader style={{backgroundColor: `${colorHeader || "lime"}`}}>
                    <AdsCardTitle>{title}</AdsCardTitle>
                    <AdsCardAuthor>
                        <AvatarComponent size="20px" id={2222} />
                        <AdsCardAuthorName>{name}</AdsCardAuthorName>
                    </AdsCardAuthor>
                </AdsCardHeader>
                <AdsCardTags>
                    <AdsCardTagsTitle>Теги</AdsCardTagsTitle>
                    <Tags tags={tags} />
                </AdsCardTags>
            </AdsCardWrapper>
        </AdsCardLink>
    )
}
