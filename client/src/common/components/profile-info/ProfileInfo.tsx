import { ContactDetails, ContactItem, ContactItemIcon, ContactItems, ContactItemText, ContactLink, ContactlinkImg, ContactLinks, ContactName, ProfileBackLink, ProfileBanner, ProfileInfoAvatar, ProfileInfoContent, ProfileInfoWrapper } from "./styles";
import locationImg from "../../icons/svg/location.svg";
import tgImg from "../../icons/svg/tg.svg";
import waImg from "../../icons/svg/wa.svg";
import vkImg from "../../icons/svg/vk.svg";

const homeLink = "/user/home";

export default function ProfileInfo() {
    return (
        <ProfileInfoWrapper>
            <ProfileBackLink to={homeLink}>Назад</ProfileBackLink>
            <ProfileBanner />
            <ProfileInfoContent>
                <ProfileInfoAvatar></ProfileInfoAvatar>
                <ContactDetails>
                    <ContactName>Emilia Lin</ContactName>
                    <ContactItems>
                        <ContactItem>
                            <ContactItemIcon src={locationImg} />
                            <ContactItemText>Москва</ContactItemText>
                        </ContactItem>
                        <ContactItem>
                            <ContactItemText>Возраст: 18</ContactItemText>
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
