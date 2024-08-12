import { useState } from 'react';
import { useActions } from '../../../store/actions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { BlackTransparentBg, FormButton, FormInput, FormItem, FormLabel, FormTitle } from '../../styles';
import ContactsInput from './components/ContactsInput';
import GenderInput from './components/GenderInput';
import { UserInfoWindowWrapper } from './styles';
import { ContactsLinks, GenderType } from '../../../store/reducers/user/userInfoSlice';


export default function UserInfoWindow() {
    const user = useAppSelector(state => state.userReducer);
    const {setUserInfo, setStartInfo} = useActions();

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [gender, setGender] = useState<GenderType>('male');
    const [contacts, setContacts] = useState<ContactsLinks>({tg: '', wa: '', vk: ''});

    const handleClick = () => {
        setUserInfo({
            name: name,
            date: date,
            location: location,
            gender: gender,
            contacts: contacts
        });
        setStartInfo();
    }

    return (
        <>
            {!user.isInfo &&
                <BlackTransparentBg>
                    <UserInfoWindowWrapper>
                        <FormTitle>Информация о себе</FormTitle>
                        <FormItem>
                            <FormLabel htmlFor='name'>Имя</FormLabel>
                            <FormInput id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Введите ваше имя...' />
                        </FormItem>
                        <FormItem>
                            <FormLabel htmlFor='date'>Введите дату рождения</FormLabel>
                            <FormInput id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} type='date' />
                        </FormItem>
                        <FormItem>
                            <FormLabel htmlFor='location'>Место проживания</FormLabel>
                            <FormInput id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} type='text' placeholder='Введите место проживания...' />
                        </FormItem>
                        <GenderInput gender={gender} setGender={setGender}/>
                        <ContactsInput contacts={contacts} setContacts={setContacts} />
                        <FormButton onClick={() => handleClick()}>Сохранить</FormButton>
                    </UserInfoWindowWrapper>
                </BlackTransparentBg >
            }
        </>
    )
}
