import { AdsCardAuthor, AdsCardAuthorName, AdsCardAvatar, AdsCardHeader, AdsCardTags, AdsCardTagsTitle, AdsCardTitle, AdsCardWrapper } from "./styles";

export default function AdsCard() {
    return (
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
            </AdsCardTags>
        </AdsCardWrapper>
    )
}
