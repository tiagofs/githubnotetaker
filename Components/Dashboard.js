import React, { Component } from 'react';
import Api from '../Utils/Api';
import Notes from '../Components/Notes';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

export default class Main extends Component {
  makeBackground(btn){
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }

    if(btn === 0){
      obj.backgroundColor = '#48BBEC'
    } else if (btn === 1){
      obj.backgroundColor = '#E77AAE'
    } else {
      obj.backgroundColor = '#758BF4'
    }

    return obj;
  }
  goToProfile(){
    this.props.navigator.push({
      id: 4,
      passProps: this.props.userInfo
    });
  }
  goToRepos(){
    Api.getRepos(this.props.userInfo.login)
      .then((res) => {
        this.props.navigator.push({
          id: 5,
          userInfo: this.props.userInfo,
          repos: res
        });
      });
  }
  goToNotes(){
    Api.getNotes(this.props.userInfo.login)
      .then((res) => {
        res = res || {};
        this.props.navigator.push({
          id: 7,
          notes: res,
          userInfo: this.props.userInfo
        })
      });
  }
  render(){
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
        <TouchableOpacity
          style={this.makeBackground(0)}
          onPress={this.goToProfile.bind(this)}
          underlayColor="88D4F5">
            <Text style={styles.buttonText}> View Profile </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={this.makeBackground(1)}
          onPress={this.goToRepos.bind(this)}
          underlayColor="88D4F5">
            <Text style={styles.buttonText}> View Repos </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={this.makeBackground(2)}
          onPress={this.goToNotes.bind(this)}
          underlayColor="88D4F5">
            <Text style={styles.buttonText}> View Notes </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
