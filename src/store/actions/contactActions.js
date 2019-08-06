import types from "../types";
import RobotService from "../../services/RobotService";



export const fetchData = (data) => {
    return {
        type: types.FETCH_CONTACTS,
        data
    }
};

export const fetchRobotsData = () => {
    return (dispatch) => {
        return RobotService.getRobots()
            .then(response => {
                dispatch(fetchData(response))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const changeNavBar = (isShow) => {
    return { type: types.HIDE_SHOW_NAVBAR, isShow }
}