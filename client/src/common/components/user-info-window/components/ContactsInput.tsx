import { FormContactImg, FormContactWrapper, FormInput, FormItem, FormLabel } from "../../../styles";
import tg from '../../../icons/svg/tg.svg';
import wa from '../../../icons/svg/wa.svg';
import vk from '../../../icons/svg/vk.svg';
import { ContactsLinks } from "../../../../store/reducers/user/userInfoSlice";

interface ContactsInputProps {
    contacts: ContactsLinks,
    setContacts: (arg: ContactsLinks) => void
}

export default function ContactsInput({contacts, setContacts}: ContactsInputProps) {

    return (
        <FormItem>
            <FormLabel>Вставьте ссылки на ваши контакты</FormLabel>
            <FormContactWrapper>
                <FormContactImg src={tg} />
                <FormInput id="tg" name="tg" type='text' value={contacts.tg} onChange={(e) => setContacts({...contacts, tg: e.target.value})} placeholder='Ссылка на Telegram' />
            </FormContactWrapper>
            <FormContactWrapper>
                <FormContactImg src={wa} />
                <FormInput id="wa" name="wa" type='text' value={contacts.wa} onChange={(e) => setContacts({...contacts, wa: e.target.value})} placeholder='Ссылка на WhatsApp' />
            </FormContactWrapper>
            <FormContactWrapper>
                <FormContactImg src={vk} />
                <FormInput id="vk" name="vk" type='text' value={contacts.vk} onChange={(e) => setContacts({...contacts, vk: e.target.value})} placeholder='Ссылка на Вконтакте' />
            </FormContactWrapper>
        </FormItem>
    )
}
