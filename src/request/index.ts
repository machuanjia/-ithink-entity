/*
 * @Author: D.Y.M
 * @Date: 2021-11-23 19:27:54
 * @LastEditTime: 2021-11-23 19:27:54
 * @FilePath: /ithink-entity/src/request/index.ts
 * @Description:
 */

import axios from 'axios';

type IOption = {
  baseURL?: string;
  timeout?: number;
  requestAction?: (config: any) => {};
  responseAction?: any;
  responseErrorAction?: any;
};

export const defaultOptions: IOption = {
  baseURL: '/api',
  timeout: 5000,
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  requestAction: config => {},
  responseAction: null,
  responseErrorAction: null,
};

export const getRequest = (ops: IOption) => {
  const options = Object.assign(defaultOptions, ops);
  const service = axios.create({
    baseURL: options.baseURL,
    timeout: options.timeout,
  });

  service.interceptors.request.use(
    config => {
      options.requestAction && options.requestAction(config);
      return config;
    },
    error => {
      Promise.reject(error);
    },
  );
  service.interceptors.response.use(
    response => {
      if (options.responseAction) {
        return options.responseAction(response);
      }
      return response;
    },
    error => {
      if (options.responseErrorAction) {
        return options.responseAction(error);
      }
      return Promise.reject(error);
    },
  );
  return service;
};
