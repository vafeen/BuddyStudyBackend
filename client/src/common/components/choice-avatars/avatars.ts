import avatarCat from "../../icons/avatars/avatar-cat.jpg";
import avatarDog from "../../icons/avatars/avatar-dog.jpg";
import avatarGiraffe from "../../icons/avatars/avatar-giraffe.png";
import avatarRaccoon from "../../icons/avatars/avatar-raccoon.jpg";

export interface AvatarsPathProps {
    id: number,
    name: string,
    path: string
}

export const avatarsPath: AvatarsPathProps[] = [
    {
        id: 2222,
        name: "avatarCat",
        path: avatarCat
    },
    {
        id: 2234,
        name: "avatarDog",
        path: avatarDog
    },
    {
        id: 4578,
        name: "avatarGiraffe",
        path: avatarGiraffe
    },
    {
        id: 8767,
        name: "avatarRaccoon",
        path: avatarRaccoon
    },
]