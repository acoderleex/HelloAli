'use strict';

import React, {
  Component
} from 'react';

import {
  Navigator,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native';

import assign from 'object-assign';
import NavBar from './../common/NavBar';

import CommonStyles from '../../../styles/common';
import TopBarStyles from '../../../styles/topBar';

const Icon = require('react-native-vector-icons/FontAwesome');
const MaterialIcons = require('react-native-vector-icons/MaterialIcons');
const personIcon = (<MaterialIcons name="person-outline" size={24} color="#FFFFFF"/>);
const searchIcon = (<MaterialIcons name="search" size={24} color="#FFFFFF"/>);
const addIcon = (<MaterialIcons name="add" size={24} color="#FFFFFF"/>);

class DetailsView extends Component {
  render(){
      return(
          <View style={styles.container}>
              <ScrollView contentContainerStyle={styles.scrollContainerTab}
                          automaticallyAdjustContentInsets={true}>
                  <View key="content" style={styles.content}>
                      <View style={{alignItems:'center',padding:60}}>
                          <Text>详情</Text>
                      </View>
                  </View>
              </ScrollView>
          </View>
      );
  }
}


const NavigationBarRouteMapper = {
    LeftButton(route,navigator,index,navState){
        if (route.name === 'details-index') {
            return null;
        }
        return(
            <NavBar.BackButton styles={styles}
                               text={route.backButtonText}
                               onPress={() => navigator.pop()}
                               style={{marginTop:10}}/>
        );
    },
    RightButton(route,navigator,index,navState){
        if (route.RightButton) {
          return(
            <NavBar.RightButton styles={styles}>
                {route.RightButton}
            </NavBar.RightButton>
          );
        }

        if (route.name === 'details-index') {
          return(
            <NavBar.RightButton styles={styles}>
                <Text key="topBarIcon" style={styles.topBarIcon}>{personIcon}&nbsp;&nbsp;{searchIcon}&nbsp;&nbsp;{addIcon}</Text>
            </NavBar.RightButton>
          );
        }
        return null;
    },
    Title(route,navigator,index,navState){
        return(
          <NavBar.Title styles={styles} title={route.title}/>
        );
    }
};


const Main = React.createClass({
  render(){
    return(
      <Navigator initialRoute={{name:'mine-index',component:DetailsView}}
                  //To change the animation or gesture properties of the scene, provide a configureScene prop to get the config object for a given route
                 configureScene={() => {return Navigator.SceneConfigs.FloatFromRight}}
                 navigationBar={
                    <Navigator.NavigationBar style={{backgroundColor:'#3F454F',alignItems:'center' }} routeMapper={NavigationBarRouteMapper}/>
                 }
                 renderScene={this.renderScene}
                 />
    );
  },
  renderScene(route,navigator){
        if (route.component) {
            return React.createElement(route.component, {...this.props,...route.props,navigator,route});
        }
    }
});

const styles = StyleSheet.create( assign(
  {},
  CommonStyles,
  TopBarStyles
) );

export default Main;
