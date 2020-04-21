import request from '@/utils/request';

export interface TestParamsType {
  id: string;
  from: string;
}

export async function getRemoteValue(params: TestParamsType) {
  console.log('2.service.getRemoteValue');
  // console.log('params', params);
  return request('/api/test/getvalue', {
    method: 'POST',
    data: params,
  });
}
