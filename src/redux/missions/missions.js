import api from '../../api/SpaceXAPI';

const getMissionsFromApi = 'missions/getMissionsFromApi';

//Initial state

const initialState = [];

const missionsData = (apiResponse) => {
    const missionsArray = apiResponse.map((mission) => ({
        id:mission.id,
        mission_name:mission.mission_name,
        description:mission.description,
    }));
    return missionsData;
};

export const getMissionsFromApi = () => ((dispatch) => {
    api.getMisiions()
    .then((response) => {
        const payload = missionsData(response);
        dispatch({
            type: getMissionsFromApi,
            payload,
        });
    });
});

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case getMissionsFromApi:
            return [
                ...action.payload,
            ];
        default:
            return state;
    }
};

export default reducer;
