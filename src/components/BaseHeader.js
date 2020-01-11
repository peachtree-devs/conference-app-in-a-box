import { StyleSheet } from 'react-native';
import { Header } from "react-native-elements";
import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import RenderLogo from './RenderLogo';
import {colors} from '../utils/colors';

class BaseHeader extends React.Component {
    render() {
        return (
            <Header
                leftComponent={<HamburgerMenu/>}
                centerComponent={<RenderLogo/>}
                containerStyle={{
                    backgroundColor: colors.black,
                    borderBottomWidth: 0
                }}
            />
        )
    }
}

export default BaseHeader;
