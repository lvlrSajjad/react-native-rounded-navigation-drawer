
# react-native-rounded-navigation-drawer [![npm version](https://img.shields.io/npm/v/react-native-rounded-navigation-drawer.svg)](https://www.npmjs.com/package/react-native-rounded-navigation-drawer)
<img src="https://raw.githubusercontent.com/lvlrSajjad/react-native-rounded-navigation-drawer/master/img.gif">
## Getting started

`$ npm install react-native-rounded-navigation-drawer --save`

## Props
    darkColor = String HexColorCode
    lightColor = String HexColorCode
    onItemPress= function like : {(item)=>console.log(item)}
    data = Array
    imageUri= String Image Link Uri
## Usage
```javascript
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {FancyNavigation,openNv,closeNv} from 'react-native-rounded-navigation-drawer';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            //id and title fields in datastructures is required
            data:[
                {id: '1', title: "Red", color: "#f44336", span: 1},
                {id: '2', title: "Pink", color: "#E91E63", span: 2},
                {id: '3', title: "Purple", color: "#9C27B0", span: 3},
                {id: '4', title: "Deep Purple", color: "#673AB7", span: 1},
                {id: '5', title: "Indigo", color: "#3F51B5", span: 1},
                {id: '6', title: "Blue", color: "#2196F3", span: 1},
                {id: '7', title: "Light Blue", color: "#03A9F4", span: 3},
                {id: '8', title: "Cyan", color: "#00BCD4", span: 2},
                {id: '9', title: "Teal", color: "#009688", span: 1},
                {id: '10', title: "Green", color: "#4CAF50", span: 1},
                {id: '11', title: "Light Green", color: "#8BC34A", span: 2},
                {id: '12', title: "Lime", color: "#CDDC39", span: 3},
                {id: '13', title: "Yellow", color: "#FFEB3B", span: 2},
                {id: '14', title: "Amber", color: "#FFC107", span: 1},
                {id: '15', title: "Orange", color: "#FF5722", span: 3},
            ],

        }
    }

    render() {
        return (

            <View style={styles.container}>
                <FancyNavigation
                    darkColor = "#1976D2"
                    lightColor = "#03A9F4"
                    onItemPress= {(item)=>console.log(item)}
                    data = {this.state.data}
                   imageUri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwu7s_Ic3YioDVl9AmoJGsKbBuCKFVp2cD3KCPzdYlBLOcGmeV'
                />

                <TouchableOpacity
                    onPress={() => {
                        openNv();
                    }}
                    style={{width: 60,
                     height: 46,
                     position:'absolute',
                     top:16,
                     left:0,
                     backgroundColor: "#03A9F4",
                     borderBottomRightRadius: 8,
                     borderTopRightRadius: 8,
                     }}
                     />
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

```
