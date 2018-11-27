/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import './util/global';
import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import { ThemeProvider } from './util/theme-context';
import Home from './src';
import Detail from './src/Detail';

const StackNavigatorConfig = {
	headerMode: 'none',
	mode: 'card',
	cardStyle:{
		backgroundColor:'red'
	},
	transitionConfig: () => ({
        screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    })
}

const App = createAppContainer(createStackNavigator({
	Home: Home,
	Detail: Detail,
}, StackNavigatorConfig));

export default () => (
	<ThemeProvider>
		<StatusBar translucent={false} backgroundColor="#fff" />
		<App screenProps={{themeColor:'red'}} />
	</ThemeProvider>
)