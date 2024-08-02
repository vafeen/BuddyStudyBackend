import PetCard from "../pet-card/PetCard";
import { ProfileDesc, ProfileDescText, ProfileDescTitle, ProfileDetailsWrapper } from "./styles";

export default function ProfileDetails() {
    return (
        <ProfileDetailsWrapper>
            <PetCard />
            <ProfileDesc>
                <ProfileDescTitle>О себе</ProfileDescTitle>
                <ProfileDescText>
                    Привет! Я Анна, и я увлечена изучением новых технологий и программирования. В данный момент я занимаюсь разработкой проектов в области искусственного интеллекта и ищу напарника для совместного изучения и обмена знаниями. Мне нравится работать в команде, обсуждать идеи и находить креативные решения.
                </ProfileDescText>
            </ProfileDesc>
        </ProfileDetailsWrapper>
    )
}
