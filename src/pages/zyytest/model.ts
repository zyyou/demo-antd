import { Effect, Reducer } from 'umi';

import { getRemoteValue } from './service';

export interface ApiDataType {
  id?: string;
  from?: string;
  random?: number;
  data?: any;
}

export interface ZyyTestModelType {
  namespace: string;
  state: ApiDataType;
  effects: {
    getVal: Effect;
  };
  reducers: {
    changeApiData: Reducer<ApiDataType>;
  };
}

const ZyyTestModel: ZyyTestModelType = {
  namespace: 'zyytest',

  state: {},

  effects: {
    *getVal({ payload }, { call, put, select }) {
      console.log('model.getVal');
      const response = yield call(getRemoteValue, payload);
      yield put({
        type: 'changeApiData',
        payload: response,
      });
      const data = yield select((state: any) => state);
      // console.log('data', data);
      return data;
    },
  },
  reducers: {
    changeApiData(state, { payload }) {
      console.log('model.changeApiData');
      const res = {
        ...state,
        ...payload,
      };
      // console.log('model.changeApiData.res', res);
      return res;
    },
  },
};

export default ZyyTestModel;
