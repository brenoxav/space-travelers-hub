import api from '../../api/SpaceXAPI';

const GET_MISSIONS_FROM_API = 'missions/GET_MISSIONS_FROM_API';

// Initial state

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS_FROM_API:
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
};

export default reducer;
