import { BlackTransparentBg, CloseWindowButton, FormButton, FormInput, FormItem, FormLabel, FormTitle } from "../../styles";
import { CreateAdvTextarea, CreateAdvWrapper } from "./styles";
import closeImg from "../../icons/svg/close.svg";
import TagsComponent from "../tags/TagsComponent";

interface CreateAdvProps {
    setIsCreate: (arg: boolean) => void
}

export default function CreateAdv({ setIsCreate }: CreateAdvProps) {
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
                        placeholder="Введите заголовок обьявления..."
                    />
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor="desc">Описание обьявления</FormLabel>
                    <CreateAdvTextarea
                        id="desc"
                        name="desc"
                        placeholder="Опишите кого и для чего вы ищете"
                    />
                </FormItem>
                <TagsComponent />
                <FormButton>Создать</FormButton>
                <CloseWindowButton onClick={() => setIsCreate(false)} src={closeImg} />
            </CreateAdvWrapper>
        </BlackTransparentBg>
    )
}
