import { MainLayout, PageTitle, PageSubtext } from 'components/common/common';
import * as S from './contacts.styled';
import { ContactsData } from 'consts';
import Map from './components/map/map'

const Contacts = () => (
  <MainLayout>
    <S.Main>
      <S.ContentWrapper>
        <S.PageHeading>
          <PageTitle>Контакты</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </S.PageHeading>

        <S.Contacts>
          <S.ContactsList>
            <S.ContactTitle>{ContactsData.address.title}</S.ContactTitle>
            <S.ContactValue>
              <S.ContactAddress>
                {`${ContactsData.address.city},`}
                <br />
                {`${ContactsData.address.street}, ${ContactsData.address.houseNumber}`}
              </S.ContactAddress>
            </S.ContactValue>

            <S.ContactTitle>{ContactsData.schedule.title}</S.ContactTitle>
            <S.ContactValue>{ContactsData.schedule.openingHours}</S.ContactValue>

            <S.ContactTitle>{ContactsData.phone.title}</S.ContactTitle>
            <S.ContactValue>
              <S.ContactLink href={`tel:${ContactsData.phone.number}`}>
                {ContactsData.phone.number}
              </S.ContactLink>
            </S.ContactValue>

            <S.ContactTitle>{ContactsData.email.title}</S.ContactTitle>
            <S.ContactValue>
              <S.ContactLink href={`mailto:${ContactsData.email.address}`}>
                {ContactsData.email.address}
              </S.ContactLink>
            </S.ContactValue>
          </S.ContactsList>
          <Map location={ContactsData.coordinates.location}/>
        </S.Contacts>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
);

export default Contacts;
