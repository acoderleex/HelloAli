'use strict';
import React, { Component } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View
} from 'react-native';

const QuickEntry = React.createClass({
  render() {
    const {styles} = this.props;
    const {
       onQuickPress
    } =this.props;
    return (
        <View key="quickEntry" style={styles.quickEntry}>
          <View key="scan" style={styles.quickEntryItem}>
            <TouchableOpacity style={{flex:1, alignItems:'center'}}
                              onPress={() => onQuickPress(0)}>
            <Image source={require('../../../images/iconfont-scan.png')} style={styles.quickEntryItemIcon}/>
            <Text key="scan" style={styles.quickEntryItemText}>扫一扫</Text>
            </TouchableOpacity>
          </View>
          <View key="pay" style={styles.quickEntryItem}>
            <Image source={require('../../../images/iconfont-paycode.png')} style={styles.quickEntryItemIcon}/>
            <Text key="pay" style={styles.quickEntryItemText}>付款</Text>
          </View>
          <View key="discount" style={styles.quickEntryItem}>
            <Image source={require('../../../images/iconfont-discount.png')} style={styles.quickEntryItemIcon}/>
            <Text key="discount" style={styles.quickEntryItemText}>卡券</Text>
          </View>
          <View key="xiu" style={styles.quickEntryItem}>
            <Image source={require('../../../images/iconfont-dangmianfu-yellow.png')} style={styles.quickEntryItemIcon}/>
            <Text key="xiu" style={styles.quickEntryItemTextYellow}>咻一咻</Text>
          </View>
        </View>
    );
  }
});

export default QuickEntry;
