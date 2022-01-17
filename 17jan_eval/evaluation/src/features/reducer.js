import { ADD_JOB, GET_JOB } from "./actionType.js";

const init = { jobs: [] };

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, payload],
      };

    case GET_JOB:
      return {
        ...state,
        jobs: payload,
      };

    default:
      return state;
  }
};
