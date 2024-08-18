import avatarCat from "../../icons/avatars/avatar-cat.jpg";
import avatarDog from "../../icons/avatars/avatar-dog.jpg";
import avatarGiraffe from "../../icons/avatars/avatar-giraffe.png";
import avatarRaccoon from "../../icons/avatars/avatar-raccoon.jpg";

export interface AvatarsPathProps {
    name: string,
    path: string
}

export const avatarsPath: AvatarsPathProps[] = [
    {
        name: "avatarCat",
        path: avatarCat
    },
    {
        name: "avatarDog",
        path: avatarDog
    },
    {
        name: "avatarGiraffe",
        path: avatarGiraffe
    },
    {
        name: "avatarRaccoon",
        path: avatarRaccoon
    },
]