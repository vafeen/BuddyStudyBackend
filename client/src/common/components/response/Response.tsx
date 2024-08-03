import { ResponseContent, ResponseHeader, ResponseWrapper } from './styles'
import { AdsCardAuthor, AdsCardAuthorName, AdsCardAvatar } from '../ads-card/styles'

export default function Response() {
    return (
        <ResponseWrapper>
            <ResponseHeader>
                <AdsCardAuthor>
                    <AdsCardAvatar></AdsCardAvatar>
                    <AdsCardAuthorName>Emilia N.</AdsCardAuthorName>
                </AdsCardAuthor>
            </ResponseHeader>
            <ResponseContent>
                Не буду разглагольствовать о себе, об этом всегда можно будет узнать в переписке (я не скрываю свою личность и только рад открытому общению), а сразу перейду к делу. В моих планах поиск по 3 интересующим меня направлениям:  
            </ResponseContent>
        </ResponseWrapper>
    )
}
