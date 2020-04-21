import request from '@/utils/request';

export interface TestParamsType {
  id: string;
  data: string;
}

export async function getRemoteValue(params: TestParamsType) {
  console.log('service.getRemoteValue');
  // console.log('params', params);
  const res = request('/api/zyytest/getvalue', {
    method: 'POST',
    data: params,
  });
  return res;
}
