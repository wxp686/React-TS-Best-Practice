import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const ServerErrorPage: React.FC = () => (
  <Result
    status="500"
    title="500"
    subTitle="后台错误,请稍后重试或联系管理员."
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        回到首页
      </Button>
    }
  />
);

export default ServerErrorPage;
