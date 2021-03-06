import _ from 'lodash';

import { REQUEST, SUCCESS, FAILURE } from '../shared/action-type.util';
import axiosInstance from '../shared/axios';

export const ACTION_TYPES = {
  GET_PATIENT: 'patientReducer/GET_PATIENT',
  RESET: 'patientReducer/RESET'
};

const initialState = {
  patient: {} as any,
  patientLoading: false
};

export type PatientState = Readonly<typeof initialState>;

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_PATIENT):
      return {
        ...state,
        patientLoading: true
      };
    case FAILURE(ACTION_TYPES.GET_PATIENT):
      return {
        ...state,
        patientLoading: false
      };
    case SUCCESS(ACTION_TYPES.GET_PATIENT):
      return {
        ...state,
        patientLoading: false,
        patient: action.payload.data
      };
    case ACTION_TYPES.RESET:
      return {
        ..._.cloneDeep(initialState)
      };
    default:
      return state;
  }
};

const patientUrl = "/ws/rest/v1/patient/";

export const getPatient = (patientId) => async (dispatch) => {
  await dispatch({
    type: ACTION_TYPES.GET_PATIENT,
    payload: axiosInstance.get(`${patientUrl}${patientId}?v=full`)
  });
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
