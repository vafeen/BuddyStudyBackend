import Tags from "../tags/Tags";
import { AdsCardAuthor, AdsCardAuthorName, AdsCardAvatar, AdsCardHeader, AdsCardLink, AdsCardTags, AdsCardTagsTitle, AdsCardTitle, AdsCardWrapper } from "./styles";

const advLink = "/user/adv";

export default function AdsCard() {
    return (
        <AdsCardLink to={''}>
            <AdsCardWrapper>
                <AdsCardHeader>
                    <AdsCardTitle>Требуется напарник по изучению английского</AdsCardTitle>
                    <AdsCardAuthor>
                        <AdsCardAvatar></AdsCardAvatar>
                        <AdsCardAuthorName>Emilia N.</AdsCardAuthorName>
                    </AdsCardAuthor>
                </AdsCardHeader>
                <AdsCardTags>
                    <AdsCardTagsTitle>Теги</AdsCardTagsTitle>
                    <Tags tags={[]} />
                </AdsCardTags>
            </AdsCardWrapper>
        </AdsCardLink>
    )
}
