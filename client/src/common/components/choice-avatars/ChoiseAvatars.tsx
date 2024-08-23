import { useEffect, useState } from "react";
import { avatarsPath } from "./avatars";
import { ChoiceAvatarsWrapper, DefaultAvatarCard, DefaultAvatarImg } from "./styles";
import { colors } from "../../styleConstants";

const activeCard = {
    backgroundColor: `${colors.accentChoice}`
}

interface ChoiseAvatarsProps {
    setAvatarId: (arg: number | null) => void
}

export default function ChoiseAvatars({setAvatarId}: ChoiseAvatarsProps) {
    const [activeAvatar, setActiveAvatar] = useState<number | null>(null);

    useEffect(() => {
        setAvatarId(activeAvatar)
    }, [activeAvatar])

    return (
        <ChoiceAvatarsWrapper>
            {
                avatarsPath.map((elem, i) =>
                    <DefaultAvatarCard
                        key={i}
                        style={activeAvatar === elem.id ? {...activeCard} : {}}
                        onClick={() => setActiveAvatar(elem.id)}
                    >
                        <DefaultAvatarImg src={elem.path} />
                    </DefaultAvatarCard>
                )
            }
        </ChoiceAvatarsWrapper>
    )
}
