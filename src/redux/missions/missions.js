import api from '../../api/SpaceXAPI';

const GET_MISSIONS_FROM_API = 'missions/GET_MISSIONS_FROM_API';
const RESERVE_MISSION = 'missions/RESERVE_MISSION';
const CANCEL_MISSION_RESERVATION = 'missions/CANCEL_MISSION_RESERVATION';

const initialState = [];

const missionsData = (apiResponse) => {
  const missionsArray = apiResponse.map((mission) => ({
    id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
  return missionsArray;
};

export const getMissionsFromApi = () => ((dispatch) => {
  api.getMissions()
    .then((response) => {
      const payload = missionsData(response);
      dispatch({
        type: GET_MISSIONS_FROM_API,
        payload,
      });
    });
});

export const reserveMission = (payload) => ({
  type: RESERVE_MISSION,
  payload,
});

export const cancelMissionReservation = (payload) => ({
  type: CANCEL_MISSION_RESERVATION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS_FROM_API:
      return [
        ...action.payload,
      ];

    case RESERVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.payload.id) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return [
        ...newState,
      ];
    }

    case CANCEL_MISSION_RESERVATION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.payload.id) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
      return [
        ...newState,
      ];
    }

    default:
      return state;
  }
};

export default reducer;
