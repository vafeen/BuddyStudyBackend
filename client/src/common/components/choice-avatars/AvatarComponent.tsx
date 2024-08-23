import { getAvatarPath } from "../../helpers/getAvatarPath";
import { DefaultAvatarImg } from "./styles";

interface AvatarComponentProps {
    size: string,
    id: number | null
}

export default function AvatarComponent({ size, id }: AvatarComponentProps) {
    return (
        <DefaultAvatarImg style={{width: `${size}`, height: `${size}`}} src={getAvatarPath(id)}/>
    )
}
