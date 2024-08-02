import { PetCardAvatar, PetCardAvatarImg, PetCardButton, PetCardName, PetCardWrapper } from "./styles";

export default function PetCard() {
    return (
        <PetCardWrapper>
            <PetCardAvatar>
                <PetCardAvatarImg />
            </PetCardAvatar>
            <PetCardName>Питомец</PetCardName>
            <PetCardButton>Выбрать</PetCardButton>
        </PetCardWrapper>
    )
}
