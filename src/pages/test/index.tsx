import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

export default (): React.ReactNode => (
  <PageHeaderWrapper content=" 这里是一段描述">
    <p style={{ textAlign: 'center', marginTop: 24 }}>Test</p>
  </PageHeaderWrapper>
);
