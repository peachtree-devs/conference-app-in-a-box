import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../utils/colors';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import BaseHeader from '../../components/BaseHeader';
import StepFullName from './components/stepFullName';
import StepPassword from './components/stepPassword';
import StepEmail from './components/stepEmail';
import {Screens} from '../constants';

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.userSubmit = this.userSubmit.bind(this);
    }

    userSubmit() {
        const { navigate } = this.props.navigation;

        navigate(Screens.RENDER)
    }

    render() {
        return (
            <View style={styles.container}>
                <BaseHeader />
                <ProgressSteps
                    nextBtnTextStyle={styles.actionButtons}
                    previousBtnTextStyle={styles.actionButtons}
                >
                    <ProgressStep label="Name">
                        <StepFullName />
                    </ProgressStep>
                    <ProgressStep label="Email">
                        <StepEmail />
                    </ProgressStep>
                    <ProgressStep label="Password">
                        <StepPassword />
                    </ProgressStep>
                    <ProgressStep onSubmit={this.userSubmit} label="Optional">
                        <View style={{ alignItems: 'center', padding: 10 }}>
                            <Text>This is the content within step 3!</Text>
                        </View>
                    </ProgressStep>
                </ProgressSteps>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-end"
    },
    actionButtons: {
        backgroundColor: '#87ecff',
        borderWidth: 1,
        borderColor: 'black'
    },
});
