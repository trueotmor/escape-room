export const AppRoute = {
  Main: '/',
  QuestCard: '/quest/:id',
  Contacts: '/contacts',
  Newcomers: '/for-newcomers',
  Reviews: '/reviews',
  Promotions: '/pomotions',
};

export const ServerRoute = {
  Quests: '/quests',
  Orders: '/orders',
  Quest: '/quest/:id',
};

export const BACKEND_URL = 'http://localhost:3001';
export const REQUEST_TIMEOUT = 10000;

export const HttpCode = {
  NotFound: 404,
  ServerErrorMin: 500,
  ServerErrorMax: 599,
};
