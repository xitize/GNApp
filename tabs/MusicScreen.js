import React, { Component } from 'react'
import {
    Text, View, Button, Image
} from 'react-native'
export default class MusicScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Music'
    }
    render() {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>This is tab 4</Text>
        </View>
    }
}