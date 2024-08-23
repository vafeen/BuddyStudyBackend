import { ContactDetails, ContactItem, ContactItemIcon, ContactItems, ContactItemText, ContactLink, ContactlinkImg, ContactLinks, ContactName, ProfileBackLink, ProfileBanner, ProfileInfoAvatar, ProfileInfoContent, ProfileInfoWrapper } from "./styles";
import locationImg from "../../icons/svg/location.svg";
import tgImg from "../../icons/svg/tg.svg";
import waImg from "../../icons/svg/wa.svg";
import vkImg from "../../icons/svg/vk.svg";
import { getGenderUser } from "../../helpers/getGenderUser";
import { UserInfoProps } from "../../../store/reducers/user/userInfoSlice";
import AvatarComponent from "../choice-avatars/AvatarComponent";
import { getUserAge } from "../../helpers/getUserAge";

interface ProfileInfoProps {
    info: UserInfoProps
}

const homeLink = "/user/home";

export default function ProfileInfo({ info }: ProfileInfoProps) {
    const { name, date, city, gender, avatarId } = info;

    return (
        <ProfileInfoWrapper>
            <ProfileBackLink to={homeLink}>Назад</ProfileBackLink>
            <ProfileBanner />
            <ProfileInfoContent>
                <ProfileInfoAvatar>
                    <AvatarComponent id={avatarId} size={'auto'} />
                </ProfileInfoAvatar>
                <ContactDetails>
                    <ContactName>{name}</ContactName>
                    <ContactItems>
                        <ContactItem>
                            <ContactItemIcon src={locationImg} />
                            <ContactItemText>{city}</ContactItemText>
                        </ContactItem>
                        <ContactItem>
                            <ContactItemText>Возраст: {getUserAge(date)}</ContactItemText>
                        </ContactItem>
                        <ContactItem>
                            <ContactItemText>Пол: {getGenderUser(gender)}</ContactItemText>
                        </ContactItem>
                    </ContactItems>
                    <ContactItem>
                        <ContactItemText>Контакты</ContactItemText>
                        <ContactLinks>
                            <ContactLink>
                                <ContactlinkImg src={waImg} />
                            </ContactLink>
                            <ContactLink>
                                <ContactlinkImg src={tgImg} />
                            </ContactLink>
                            <ContactLink>
                                <ContactlinkImg src={vkImg} />
                            </ContactLink>
                        </ContactLinks>
                    </ContactItem>
                </ContactDetails>
            </ProfileInfoContent>
        </ProfileInfoWrapper>
    )
}
