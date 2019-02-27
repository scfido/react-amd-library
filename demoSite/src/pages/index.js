import React from 'react';
import styles from './index.css';
import requirejs from 'requirejs';
import { Input } from 'antd';

requirejs.config({
  baseUrl: 'js',
  paths: {
  }
});

export default class Page extends React.Component {

  state = {
    Button: null,
    Form: null,
  }

  componentDidMount() {
    requirejs(["form"], (Form) => {
      this.setState({ Form: <Form.default>从JS加载的表单</Form.default> })
    });
  }

  render() {

    return (
      <div className={styles.normal}>
        <div className={styles.welcome} />
        <div>
          {this.state.Button}
          {this.state.Form}
          <Input placeholder="Basic usage" />
        </div>
      </div>
    );
  }

}
