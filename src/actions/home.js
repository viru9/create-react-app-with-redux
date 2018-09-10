import axios from 'axios';
import {ROOT_BASE_URL} from './../common/common';

export const FETCH_HOME_VALUES = 'fetch_home_values';
const FETCH_HOME_VALUE = 'api/home_data';

export function fetchHomeValues(callback) {

const request = axios.get(`${ROOT_BASE_URL}${FETCH_HOME_VALUE}`)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  return ({type: FETCH_HOME_VALUES, payload: request});
}
