import { ContactDetails, ContactItem, ContactItemIcon, ContactItems, ContactItemText, ContactLink, ContactlinkImg, ContactLinks, ContactName, ProfileBanner, ProfileInfo, ProfileInfoAvatar, ProfileInfoWrapper, ProfileWrapper } from "./styles";
import locationImg from "../../common/icons/svg/location.svg";
import tgImg from "../../common/icons/svg/tg.svg";
import waImg from "../../common/icons/svg/wa.svg";
import vkImg from "../../common/icons/svg/vk.svg";

export default function Profile() {
    return (
        <ProfileWrapper>
            <ProfileInfoWrapper>
                <ProfileBanner />
                <ProfileInfo>
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
                </ProfileInfo>
            </ProfileInfoWrapper>
        </ProfileWrapper>
    )
}
