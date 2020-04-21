import React from 'react';
import { connect } from 'umi';
import { Button } from 'antd';

// import { ConnectState } from '@/models/connect';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { getRemoteValue } from './service';

const ZyyTest: React.FC<{}> = () => {
  const btnClickHandler = async () => {
    const res = await getRemoteValue({ id: 'ABC123', from: 'ztest' });
    console.log('res=', res);
    return res;
  };

  return (
    <PageHeaderWrapper content=" 这里是一段描述33333333333">
      <p style={{ textAlign: 'center', marginTop: 24 }}>Test</p>
      <Button type="primary" id="btnTest" name="btnTestName" onClick={btnClickHandler}>
        按钮测试
      </Button>
    </PageHeaderWrapper>
  );
};

export default connect(
  ({
    test,
    loading,
  }: {
    test: any;
    loading: {
      effects: { [key: string]: boolean };
    };
  }) => ({
    test,
    loading: loading.effects['test/getValue'],
  }),
)(ZyyTest);
