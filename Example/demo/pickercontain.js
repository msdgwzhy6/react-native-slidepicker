/*
 * @Author: xuwei
 * @Date: 2020-11-18 09:37:11
 * @LastEditTime: 2020-11-20 15:47:44
 * @LastEditors: xuwei
 * @Description:
 */

import React, {PureComponent, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

export class AbsoContain extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.box}>
        <View
          underlayColor={'#888'}
          style={{flex: 1, zIndex: 12, backgroundColor: '#000', opacity: 0.3}}
          activeOpacity={1}
        />
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
});

export const ModalContain = React.memo(({isModalShow, children}) => {
  return (
    <Modal
      backdropColor={'#000'}
      backdropOpacity={0.6}
      isVisible={isModalShow} //显示在外部控制
      style={{flex: 1, margin: 0, justifyContent: 'flex-end'}}>
      {children}
    </Modal>
  );
});
