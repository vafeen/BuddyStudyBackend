import { useState } from 'react';
import { TagsAddTag, TagsInput, TagsInputWrapper, TagsTitle, TagsWrapper } from './styles';
import Tags from './Tags';

export default function TagsComponent() {
    const [tags, setTags] = useState<string[]>([]);
    const [tag, setTag] = useState('');

    return (
        <TagsWrapper>
            <TagsTitle>Теги</TagsTitle>
            <TagsInputWrapper>
                <TagsInput value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Введите тег..." />
                <TagsAddTag onClick={() => setTags([...tags, tag])}>Добавить</TagsAddTag>
            </TagsInputWrapper>
            <Tags tags={tags} />
        </TagsWrapper>
    )
}
