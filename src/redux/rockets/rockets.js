import api from "../../api/SpaceXAPI";

const GET_ROCKETS_FROM_API = 'rockets/GET_ROCKETS_FROM_API';

const initialState = [];

const formatRockets = (apiResponse) => {
  const rocketsArr = apiResponse.map((rocket) => ({
    id: rocket.id,
    rocket_name: rocket.rocket_name,
    description: rocket.description,
    flickr_images: rocket.flickr_images,
  }));
  return rocketsArr;
}

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

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ROCKETS_FROM_API:
      return [
        ...action.payload,
      ];

    default:
      return state;
  }
}

export default reducer;
