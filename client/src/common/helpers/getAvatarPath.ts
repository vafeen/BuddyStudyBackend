import { avatarsPath } from "../components/choice-avatars/avatars"

export const getAvatarPath = (id: number | null): string => {
    if (id) {
        for(let i = 0; i < avatarsPath.length; i++) {
            if (avatarsPath[i].id === Number(id)) {
                return avatarsPath[i].path;
            }
        }
        return '';
    } else {
        return '';
    }
}