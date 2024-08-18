import { useState } from "react";
import { avatarsPath } from "./avatars";
import { ChoiceAvatarsWrapper, DefaultAvatarCard, DefaultAvatarImg } from "./styles";
import { colors } from "../../styleConstants";

const activeCard = {
    backgroundColor: `${colors.accentChoice}`
}

export default function ChoiseAvatars() {
    const [activeAvatar, setActiveAvatar] = useState('');

    return (
        <ChoiceAvatarsWrapper>
            {
                avatarsPath.map((elem, i) =>
                    <DefaultAvatarCard
                        key={i}
                        style={activeAvatar === elem.name ? {...activeCard} : {}}
                        onClick={() => setActiveAvatar(elem.name)}
                    >
                        <DefaultAvatarImg src={elem.path} />
                    </DefaultAvatarCard>
                )
            }
        </ChoiceAvatarsWrapper>
    )
}
