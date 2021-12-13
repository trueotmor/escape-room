import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import {useForm} from 'react-hook-form';
import { getFormSetting } from 'consts';

const BookingModal = ({onCloseBtnClick, peopleCount, onSubmit}) => {
  const [min, max] = peopleCount;
  const FormSetting = getFormSetting(min, max);

  const {
    register,
    formState: {
      errors,
      isValid,
    },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  });

  return(
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={onCloseBtnClick}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          onSubmit={handleSubmit(onSubmit)}
          id="booking-form"
          autocomplete="off"
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              {...register('name',{
                required: FormSetting.Name.required,
                minLength: {
                  value: FormSetting.Name.minLength,
                  message: FormSetting.Name.message,
                },
              })}
              type="text"
              id="booking-name"
              name="name"
              placeholder="Имя"
            />
          </S.BookingField>
          <S.BookingErrorContainer>
          {errors.name && <S.BookingErrorMessage>{errors.name.message || 'Ошибка!'}</S.BookingErrorMessage>}
          </S.BookingErrorContainer>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">Контактный телефон</S.BookingLabel>
            <S.BookingInput
              {...register('phone',{
                required: FormSetting.Phone.required,
                pattern: {
                  value: FormSetting.Phone.pattern,
                  message: FormSetting.Phone.message,
                },
              })}
              type="tel"
              id="booking-phone"
              placeholder="Телефон"
              name="phone"
            />
          </S.BookingField>
          <S.BookingErrorContainer>
            {errors.phone && <S.BookingErrorMessage>{errors.phone.message || 'Ошибка!'}</S.BookingErrorMessage>}
          </S.BookingErrorContainer>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">Количество участников</S.BookingLabel>
            <S.BookingInput
              {...register('peopleCount',{
                required: FormSetting.People.required,
                min: {
                  value: FormSetting.People.min,
                  message: FormSetting.People.messageMin,
                },
                max: {
                  value: FormSetting.People.max,
                  message: FormSetting.People.messageMax,
                },
              })}
              type="number"
              id="booking-people"
              name="peopleCount"
              placeholder={`Количество участников от ${min} до ${max}`}
            />
          </S.BookingField>
          <S.BookingErrorContainer>
            {errors.peopleCount && <S.BookingErrorMessage>{errors.peopleCount.message || 'Ошибка!'}</S.BookingErrorMessage>}
          </S.BookingErrorContainer>
          <S.BookingSubmit type="submit" disabled={!isValid}>Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              {...register('isLegal',{
                required: FormSetting.Legal,
              })}
              type="checkbox"
              id="booking-legal"
              name="isLegal"
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
          <S.BookingErrorContainer>
            {errors.isLegal && <S.BookingErrorMessage>{errors.isLegal.message || 'Ошибка!'}</S.BookingErrorMessage>}
          </S.BookingErrorContainer>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
}

export default BookingModal;
