import React from 'react'
import {MockData, ScheduleDays} from './constants';
import {StyleSheet, ScrollView, View} from 'react-native';
import ScheduleNavigator from '../../Navigation/ScheduleNavigator';
import {
    Card,
    CardTitle,
    CardContent,
} from 'react-native-material-cards';
import {fakeAvatar} from '../../theme';
import BaseHeader from '../../components/BaseHeader';
import {Theme} from '../../utils/themes';

class ScheduleScreen extends React.Component {
    state = {
        date: ScheduleDays.Day1.date,
        talks: [],
        loading: false
    }

    componentDidMount() {
        // Retrieve Talks from Amplify
    }

    render() {
        const mockEvents = MockData;

        return (
            <View style={styles.container}>
                <BaseHeader />
                <ScrollView>
                    <View style={styles.scrollContainer}>
                        {
                            mockEvents.map((event, index) => {
                                const talkTime = `${event.startTime} - ${event.endTime}`;
                                return (
                                    <Card key={index}>
                                        <CardTitle
                                            title={event.title}
                                            subtitle={talkTime}
                                            avatarSource={fakeAvatar}/>
                                        <CardContent text="Speaker Name"/>
                                    </Card>
                                )
                            })
                        }
                    </View>
                </ScrollView>
                <ScheduleNavigator/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.backgroundColor,
        flex: 1
    },
    scrollContainer: {
        paddingBottom: 70,
        paddingRight: 20,
        paddingLeft: 20
    }
});

export default ScheduleScreen;
