import React, { Component } from 'react'
import { HeaderDropdown } from 'ant-design-pro';
import styles from './index.module.less';
import { Avatar } from 'antd';

export default class RightContent extends Component {
  render() {

    let { menu } = this.props;

    let className = styles.right;
    return (
      <div className={className}>
        <HeaderDropdown overlay={menu}>
          <span className={`${styles.action} ${styles.account}`}>
            <Avatar
              size="small"
              className={styles.avatar}
              // src={userLogged.client.photo || userLogged.photo}
              alt="avatar"
            />
            <span className={styles.name}>klk</span>
          </span>

        </HeaderDropdown>
      </div>
    )
  }
}
