import React from 'react';
import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Menu } from 'antd';
import { Dropdown } from 'antd';
import styles from './index.less';

const AvatarDropdown: React.FC = () => {
  const menuHeaderDropdown = (
    <Menu className={styles.menu}>
      <Menu.Item key="settings">
        <SettingOutlined />
        个人设置
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={styles.right}>
      <Dropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          <Avatar className={styles.avatar} size="small" alt="avatar" src={''} />
          <span className={`${styles.name} anticon`}>admin</span>
        </span>
      </Dropdown>
    </div>
  );
};

export default AvatarDropdown;
