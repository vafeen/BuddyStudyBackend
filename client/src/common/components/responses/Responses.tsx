import { ResponsesHeader, ResponsesList, ResponsesWrapper } from './styles'
import { SubTitleChapter } from '../../styles'
import Response from '../response/Response'

export default function Responses() {
    return (
        <ResponsesWrapper>
            <ResponsesHeader>
                <SubTitleChapter>Отклики</SubTitleChapter>
            </ResponsesHeader>
            <ResponsesList>
                <Response />
                <Response />
                <Response />
            </ResponsesList>
        </ResponsesWrapper>
    )
}
