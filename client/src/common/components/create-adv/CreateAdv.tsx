import { BlackTransparentBg, CloseWindowButton, FormButton, FormInput, FormItem, FormLabel, FormTitle } from "../../styles";
import { CreateAdvTextarea, CreateAdvWrapper } from "./styles";
import closeImg from "../../icons/svg/close.svg";
import TagsComponent from "../tags/TagsComponent";
import { useState } from "react";
import { useCreateAdvMutation } from "../../../store/reducers/ads/adsApi";
import { useAppSelector } from "../../hooks/useAppSelector";
import Tags from "../tags/Tags";

interface CreateAdvProps {
    setIsCreate: (arg: boolean) => void
}

// ToDO {добавить палитру}
const colorHeader = 'yellow';

export default function CreateAdv({ setIsCreate }: CreateAdvProps) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [createAdv] = useCreateAdvMutation();

    const {name} = useAppSelector(state => state.userInfoReducer)

    const handleClick = () => {
        createAdv({name, title, colorHeader, text, tags});
        setIsCreate(false);
    }

    return (
        <BlackTransparentBg>
            <CreateAdvWrapper>
                <FormTitle>Создание обьявления</FormTitle>
                <FormItem>
                    <FormLabel htmlFor="title">Заголовок обьявления</FormLabel>
                    <FormInput
                        id="title"
                        name="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Введите заголовок обьявления..."
                    />
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor="desc">Описание обьявления</FormLabel>
                    <CreateAdvTextarea
                        id="desc"
                        name="desc"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Опишите кого и для чего вы ищете"
                    />
                </FormItem>
                <TagsComponent tags={tags} setTags={setTags} />
                <Tags tags={tags} />
                <FormButton onClick={handleClick}>Создать</FormButton>
                <CloseWindowButton onClick={() => setIsCreate(false)} src={closeImg} />
            </CreateAdvWrapper>
        </BlackTransparentBg>
    )
}
