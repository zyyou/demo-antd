import React from 'react';
import { connect, Dispatch } from 'umi';
import { Button, Card, Descriptions, notification } from 'antd';

import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { ApiDataType } from './model';

interface ZyyTestProps {
  dispatch: Dispatch;
  zyytest: ApiDataType;
}

const ZyyTest: React.FC<ZyyTestProps> = (props) => {
  const btnClickHandler = async () => {
    const { dispatch } = props;

    const res = await dispatch({
      type: 'zyytest/getVal',
      payload: { id: 'aaaa', data: `r${Math.round(Math.random() * 10)}` },
    });

    notification.info({
      // duration: 10,
      message: 'getRemoteValue',
      description: JSON.stringify(res.zyytest),
    });
  };

  return (
    <PageHeaderWrapper content=" 这里是一段描述33333333333">
      <Card>
        <Button type="primary" id="btnTest" name="btnTestName" onClick={btnClickHandler}>
          按钮测试
        </Button>
      </Card>

      <Card>
        <Descriptions title="API Info" column={2} bordered>
          <Descriptions.Item label="From">{props.zyytest.from}</Descriptions.Item>
          <Descriptions.Item label="Id">{props.zyytest.id}</Descriptions.Item>
          <Descriptions.Item label="Random">{props.zyytest.random}</Descriptions.Item>
          <Descriptions.Item label="Data">{props.zyytest.data}</Descriptions.Item>
        </Descriptions>
      </Card>
    </PageHeaderWrapper>
  );
};

export default connect((zyytest: ApiDataType) => ({
  ...zyytest,
}))(ZyyTest);
