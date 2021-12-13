import { toast } from 'react-toastify';
import {
  addQuest,
  setQuests,
  setIsDataLoaded,
  setWrongIdRequest,
} from './main-data';
import {
  HttpCode,
  ServerRoute,
  ERROR_MESSAGE,
  ERROR_404_MESSAGE,
} from 'consts';

const fetchQuests = () => async (dispatch, _getState, api) => {
  dispatch(setIsDataLoaded(false));
  dispatch(setWrongIdRequest(false));
  try {
    const { data } = await api.get(ServerRoute.Quests);
    dispatch(setQuests(data));
    return Promise.resolve();
  } catch {
    toast.error(ERROR_MESSAGE);
  } finally {
    dispatch(setIsDataLoaded(true));
  }
};

const fetchQuest = (id) => async (dispatch, _getState, api) => {
  dispatch(setIsDataLoaded(false));
  dispatch(setWrongIdRequest(false));
  try {
    const { data } = await api.get(ServerRoute.getQuest(id));
    dispatch(addQuest(data));
  } catch (error) {
    if (error.response.status === HttpCode.NotFound) {
      dispatch(setWrongIdRequest(true));
      toast.error(ERROR_404_MESSAGE);
    } else {
      toast.error(ERROR_MESSAGE);
    }
  } finally {
    dispatch(setIsDataLoaded(true));
  }
};

export { fetchQuests, fetchQuest };
