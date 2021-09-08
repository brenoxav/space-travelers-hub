import api from '../../api/SpaceXAPI';

const GET_ROCKETS_FROM_API = 'rockets/GET_ROCKETS_FROM_API';
const RESERVE_ROCKET = 'rockets/RESERVE_ROCKET';
const CANCEL_ROCKET_RESERVATION = 'rockets/CANCEL_ROCKET_RESERVATION';

const initialState = [];

const formatRockets = (apiResponse) => {
  const rocketsArr = apiResponse.map((rocket) => ({
    id: rocket.id,
    rocket_name: rocket.rocket_name,
    description: rocket.description,
    flickr_images: rocket.flickr_images,
  }));
  return rocketsArr;
};

export const getRocketsFromApi = () => ((dispatch) => {
  api.getRockets()
    .then((response) => {
      const payload = formatRockets(response);
      dispatch({
        type: GET_ROCKETS_FROM_API,
        payload,
      });
    });
});

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const cancelRocketReservation = (payload) => ({
  type: CANCEL_ROCKET_RESERVATION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS_FROM_API: {
      return [
        ...action.payload,
      ];
    }

    case RESERVE_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload.id) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      return [
        ...newState,
      ];
    }

    case CANCEL_ROCKET_RESERVATION: {
      return [
        ...state,
      ];
    }

    default: {
      return state;
    }
  }
};

export default reducer;
