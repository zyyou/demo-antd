import { Effect } from 'umi';

import { getRemoteValue } from '@/services/test';

export interface StateType {
  status?: 'ok' | 'error';
  type?: string;
}

export interface TestModelType {
  namespace: string;
  state: StateType;
  effects: {
    getValue: Effect;
  };
}

const Model: TestModelType = {
  namespace: 'test',

  state: {
    status: undefined,
  },

  effects: {
    *getValue({ payload }, { call }) {
      console.log('1.model.getValue');
      // console.log('getValue', payload, call);
      const response = yield call(getRemoteValue, payload);
      return {
        status: payload.status,
        type: payload.type,
        value: 'zyy test value',
        response,
      };
    },
  },
};

export default Model;
