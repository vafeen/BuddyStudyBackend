import { GenderType } from "../../../../store/reducers/user/userInfoSlice";
import { FormItem } from "../../../styles";
import { UserInfoOption, UserInfoSelect, UserInfoSelectTitle } from "../styles";

export enum GendersEnum {
    male = 'male',
    female = 'female'
}

interface GenderInputProps {
    gender: GenderType,
    setGender: (arg: GenderType) => void
}

export default function GenderInput({ gender, setGender }: GenderInputProps) {
    const handleChange = (gender: GenderType) => {
        if (gender === GendersEnum.male) return setGender(gender);
        else return setGender(gender);
    }

    return (
        <FormItem>
            <UserInfoSelectTitle>Ваш пол</UserInfoSelectTitle>
            <UserInfoSelect onChange={(e) => handleChange(e.target.value as GenderType)} defaultValue={gender}>
                <UserInfoOption value={'male'}>Мужской</UserInfoOption>
                <UserInfoOption value={'female'}>Женский</UserInfoOption>
            </UserInfoSelect>
        </FormItem>
    )
}
