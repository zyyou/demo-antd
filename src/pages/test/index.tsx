import React, { useState } from 'react';
import { connect, Dispatch } from 'umi';
import { Button } from 'antd';

// import { ConnectState } from '@/models/connect';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { StateType } from '@/models/test';

interface TestProps {
  dispatch: Dispatch;
  userLogin: StateType;
  submitting?: boolean;
}

const Test: React.FC<TestProps> = (props) => {
  const [type] = useState<string>('account');

  const btnClickHandler = (values: any) => {
    const { dispatch } = props;
    console.log('按钮被点击');
    dispatch({
      type: 'test/getValue',
      payload: { ...values, type },
    });
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
)(Test);
