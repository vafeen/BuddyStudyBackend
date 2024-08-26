import { useState } from 'react';
import { TagsAddTag, TagsInput, TagsInputWrapper, TagsTitle, TagsWrapper } from './styles';

interface TagsComponentProps {
    tags: string[],
    setTags: (arg: string[]) => void
}

export default function TagsComponent({tags, setTags}: TagsComponentProps) {
    const [tag, setTag] = useState('');

    const handleClick = () => {
        setTags([...tags, tag]);
        setTag('');
    }

    return (
        <TagsWrapper>
            <TagsTitle>Теги</TagsTitle>
            <TagsInputWrapper>
                <TagsInput value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Введите тег..." />
                <TagsAddTag onClick={handleClick}>Добавить</TagsAddTag>
            </TagsInputWrapper>
        </TagsWrapper>
    )
}
