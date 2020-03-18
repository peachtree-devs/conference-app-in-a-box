import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Theme } from '../../utils/themes';
import BaseHeader from '../../components/BaseHeader';
import {Colors} from '../../utils/colors';
import SignUpUser from './components/SignUp/SignUp';

class UserScreen extends Component {
    state = {
        user: null
    }
    render() {
        return (
            <View style={styles.container}>
                <BaseHeader />
                <View style={styles.userContent}>
                    <Text style={styles.titleText}>Welcome.</Text>
                    <Text style={styles.messageText}>Login Or Sign up to continue</Text>
                    <SignUpUser />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.backgroundColor,
        flex: 1,
    },
    userContent: {
        padding: 20
    },
    titleText: {
        fontSize: 50,
        color: '#ffede9'
    },
    messageText: {
        fontSize: 20,
        color: Colors.white
    }
});

export default UserScreen;
