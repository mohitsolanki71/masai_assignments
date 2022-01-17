import { ADD_JOB, GET_JOB } from "./actionType.js"

export const addJobs = (data)=>{

    return{
        type:ADD_JOB,
        payload:data
    };
};

export const getJobs = (data)=>{

    return{
        type:GET_JOB,
        payload:data
    };
};