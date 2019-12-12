import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './header';
import Form from './form';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Form/>
      </div>
    );
  }
}
