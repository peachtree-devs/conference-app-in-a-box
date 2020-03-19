import { Header } from "react-native-elements";
import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import RenderLogo from './RenderLogo';
import { Colors } from '../utils/colors';

class BaseHeader extends React.Component {
    render() {
        return (
            <Header
                leftComponent={<HamburgerMenu/>}
                centerComponent={<RenderLogo/>}
                containerStyle={{
                    backgroundColor: Colors.black,
                    borderBottomWidth: 0
                }}
            />
        )
    }
}

export default BaseHeader;
