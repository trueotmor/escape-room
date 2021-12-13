import IconAllQuests from './assets/img/icon-all-quests.svg';
import IconAdventures from './assets/img/icon-adventures.svg';
import IconHorrors from './assets/img/icon-horrors.svg';
import IconMystic from './assets/img/icon-mystic.svg';
import IconDetective from './assets/img/icon-detective.svg';
import IconScifi from './assets/img/icon-scifi.svg';

export const AppRoute = {
  Main: '/',
  QuestCard: '/quest/:questID',
  Newcomers: '/for-newcomers',
  Reviews: '/reviews',
  Promotions: '/pomotions',
  Contacts: '/contacts',
  getQuest: (questID) => `/quest/${questID}`,
};

export const ServerRoute = {
  Quests: '/quests',
  Orders: '/orders',
  getQuest: (questID) => `/quests/${questID}`,
};

export const AxiosConfig = {
  BackendUrl: 'http://localhost:3001',
  RequestTimeout: 10000,
};

export const HttpCode = {
  NotFound: 404,
  ServerErrorMin: 500,
  ServerErrorMax: 599,
};

export const Navigation = [
  {
    link: AppRoute.Main,
    title: 'Квесты',
  },
  {
    link: AppRoute.Newcomers,
    title: 'Новичкам',
  },
  {
    link: AppRoute.Reviews,
    title: 'Отзывы',
  },
  {
    link: AppRoute.Promotions,
    title: 'Акции',
  },
  {
    link: AppRoute.Contacts,
    title: 'Контакты',
  },
];

export const QuestGenre = {
  All: 'all',
  Adventures: 'adventures',
  Horror: 'horror',
  Mystic: 'mystic',
  Detective: 'detective',
  Scifi: 'sci-fi',
};

export const TabsData = [
  {
    genre: QuestGenre.All,
    title: 'Все квесты',
    icon: IconAllQuests,
  },
  {
    genre: QuestGenre.Adventures,
    title: 'Приключения',
    icon: IconAdventures,
  },
  {
    genre: QuestGenre.Horror,
    title: 'Ужасы',
    icon: IconHorrors,
  },
  {
    genre: QuestGenre.Mystic,
    title: 'Мистика',
    icon: IconMystic,
  },
  {
    genre: QuestGenre.Detective,
    title: 'Детектив',
    icon: IconDetective,
  },
  {
    genre: QuestGenre.Scifi,
    title: 'Sci-fi',
    icon: IconScifi,
  },
];

export const QuestLevel = {
  easy: 'простой',
  medium: 'средний',
  hard: 'сложный',
};

export const SliceNames = {
  Main: 'main',
};

export const ContactsData = {
  address: {
    title: 'Адрес',
    city: 'Санкт-Петербург',
    street: 'Набережная реки Карповка',
    houseNumber: 'д 5',
  },
  schedule: {
    title: 'Режим работы',
    openingHours: 'Ежедневно, с 9:00 до 20:00',
  },
  phone: {
    title: 'Телефон',
    number: '8 (800) 333-55-99',
  },
  email: {
    title: 'E-mail',
    address: 'info@escape-room.ru',
  },
  coordinates: {
    title: 'Координаты',
    location: {
      latitude: 59.9684415,
      longitude: 30.3176529,
      zoom: 15,
    },
  },
};

export const EMPTY_QUESTS_LIST_NOTICE =
  'Sorry, the list of available quests for this request is empty.';

export const ERROR_MESSAGE =
  'We have a little problem. Please try again later.';

export const ERROR_404_MESSAGE = 'No data found for your query.';

export const SUCCESS_MESSAGE = 'Your request has been accepted.';

export const getFormSetting = (min, max) => {
  return {
    Name: {
      required: 'Укажите имя',
      minLength: 2,
      message: `Введите имя (не менее 2х символов)`,
    },
    Phone: {
      required: 'Укажите ваш номер телефона',
      pattern: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
      message: 'Пожалуйста введите 10ти значое число',
    },
    People: {
      required: `Укажите количество участников от ${min} до ${max}`,
      min: min,
      messageMin: `Минимум ${min} участника(ов)`,
      max: max,
      messageMax: `Максимум ${max} участника(ов)`,
    },
    Legal: 'Подтвердите соглашение',
  };
};
