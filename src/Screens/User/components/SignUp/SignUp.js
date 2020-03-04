import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../../utils/colors';
import {TextField} from 'react-native-material-textfield';

export default class SignUpUser extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Let's get you started.</Text>
                <TextField label='Email Address'/>
                <TextField
                    label='Password'
                    type="password"
                    clearTextOnFocus={true}/>
                <View style={styles.buttonContainer}>
                    <Button buttonStyle={styles.actionButtons}
                        title="Save User"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1,
        marginTop: 30,
        minHeight: 250
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-end"
    },
    actionButtons: {
        backgroundColor: '#87ecff'
    }
});
