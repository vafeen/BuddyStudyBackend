import { AdsCardAction, AdsCardTags, AdsCardTagsTitle, AdsCardWrapper } from "./styles";
import { AdvProps } from "../../../store/reducers/ads/adsApi";
import Tags from "../tags/Tags";
import AdsCardHeader from "./components/AdsCardHeader";
import AdvAction from "../adv-action/AdvAction";

interface AdsCardProps {
    adv: AdvProps
}

export default function AdsCard({ adv }: AdsCardProps) {
    const { id, title, name, tags, colorHeader } = adv;

    return (
        <AdsCardWrapper onClick={() => console.log('click')}>
            <AdsCardHeader title={title} name={name} color={colorHeader || "lime"} />

            <AdsCardTags>
                <AdsCardTagsTitle>Теги</AdsCardTagsTitle>
                <Tags tags={tags} />
            </AdsCardTags>

            <AdsCardAction>
                <AdvAction id={`${id}`} />
            </AdsCardAction>
        </AdsCardWrapper>

    )
}
