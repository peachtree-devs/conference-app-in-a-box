import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextField } from 'react-native-material-textfield';

export default class StepEmail extends Component {
    fieldRef = React.createRef();

    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.title, styles.text]}>Your Email</Text>
                <Text style={[styles.message]}>Let's Keep In Touch.</Text>
                <TextField
                    style={styles.textField}
                    label='Email Address'
                    secureTextEntry={true}
                    ref={this.fieldRef}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 35,
        paddingRight: 35,
    },
    text: {
        fontFamily: 'sans-serif'
    },
    title: {
        color: '#7E7E7E',
        fontSize: 40,
        fontWeight: 'bold'
    },
    message: {
        marginBottom: 20,
        fontSize: 16,
        color: '#333333',
    },
    textField: {
        fontSize: 20
    }
});

