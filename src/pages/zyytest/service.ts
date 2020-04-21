import request from '@/utils/request';

export interface TestParamsType {
  id: string;
  from: string;
}

export async function getRemoteValue(params: TestParamsType) {
  console.log('service.getRemoteValue');
  // console.log('params', params);
  const res = request('/api/zyytest/getvalue', {
    method: 'GET',
    data: params,
  });
  return res;
}
