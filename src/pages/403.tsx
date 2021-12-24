import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const ForbidPage: React.FC = () => (
  <Result
    status="403"
    title="403"
    style={{
      background: 'none',
    }}
    subTitle="对不起，您没有权限访问当前页面"
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        回到首页
      </Button>
    }
  />
);
export default ForbidPage;
