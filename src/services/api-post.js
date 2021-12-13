import api from './api';
import { ServerRoute, SUCCESS_MESSAGE } from 'consts';
import { toast } from 'react-toastify';

const getDataToServer = (data) => {
  return {
    name: data.name,
    isLegal: data.isLegal,
    peopleCount: parseInt(data.peopleCount),
    phone: data.phone,
  };
};

const fetchRequest = async (data) => {
  try {
    await api.post(ServerRoute.Orders, getDataToServer(data));
    toast.success(SUCCESS_MESSAGE);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export { fetchRequest };
