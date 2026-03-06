/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {StatusBar, StyleSheet, useColorScheme, View, ScrollView, Text} from 'react-native';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import normalizeColor from 'normalize-colors';

const tests = [
    {type: 'name', name: 'HEX'},
    {type: 'HEX', input: '#F00'},
    {type: 'HEX', input: '#f00'},
    {type: 'HEX', input: '#FF0000'},
    {type: 'HEX', input: '#ff0000'},
    {type: 'name', name: 'RGB / RGBA'},
    {type: 'RGB', input: 'rgb(255 0 0)'},
    {type: 'RGB', input: 'rgb(255, 0, 0)'},
    {type: 'RGBA', input: 'rgba(255, 0, 0, 0.5)'},
    {type: 'name', name: 'HSL / HSLA'},
    {type: 'HSL', input: 'hsl(120 100% 50%)'},
    {type: 'HSL', input: 'hsl(120, 100%, 50%)'},
    {type: 'HSLA', input: 'hsla(120, 100%, 50%, 0.5)'},
    {type: 'name', name: 'HWB'},
    {type: 'HWB', input: 'hwb(120 50% 0%)'},
    {type: 'HWB', input: 'hwb(120, 50%, 0%)'},
    {type: 'name', name: 'LAB (CIE L*a*b*)'},
    {type: 'LAB', input: 'lab(50 10 -5)'},
    {type: 'LAB', input: 'lab(50% 0 0)'},
    {type: 'name', name: 'LCH (CIE LCH)'},
    {type: 'LCH', input: 'lch(50% 20 180)'},
    {type: 'LCH', input: 'lch(50, 20, 180)'},
    {type: 'name', name: 'OKLAB'},
    {type: 'OKLAB', input: 'oklab(0.6 0.1 -0.05)'},
    {type: 'OKLAB', input: 'oklab(60% 0.1 -0.05)'},
    {type: 'name', name: 'OKLCH'},
    {type: 'OKLCH', input: 'oklch(0.6 0.2 180)'},
    {type: 'OKLCH', input: 'oklch(60% 0.2 180)'},
    {type: 'name', name: 'CSS color() function'},
    {type: 'color()', input: 'color(srgb 0.5 0 0)'},
    {type: 'color()', input: 'color(srgb-linear 0.215 0 0)'},
    {type: 'color()', input: 'color(display-p3 0.24 0.52 0.48)'},
    {type: 'color()', input: 'color(a98-rgb 0.44 0.5 0.37)'},
    {type: 'color()', input: 'color(prophoto-rgb 0.28 0.4 0.42)'},
    {type: 'color()', input: 'color(rec2020 0.42 0.48 0.36)'},
    {type: 'color()', input: 'color(xyz 0.2 0.15 0.6)'},
    {type: 'color()', input: 'color(xyz-d50 0.2 0.14 0.45)'},
    {type: 'color()', input: 'color(xyz-d65 0.22 0.15 0.59)'}
];

function App() {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaProvider>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <AppContent/>
        </SafeAreaProvider>
    );
}

function AppContent() {
    const safeAreaInsets = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.w100} contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.w100}>
                    <View style={styles.row}>
                        <Text style={styles.th}>Example</Text>
                        <Text style={styles.th}>Result</Text>
                    </View>
                    {
                        tests.map((item, index) => {
                            if (item.type === 'name') {
                                return (
                                    <View key={index} style={styles.row}>
                                        <Text style={styles.th}>{item.name}</Text>
                                        <Text style={styles.th}></Text>
                                    </View>
                                );
                            }

                            return (
                                <View key={index} style={styles.row}>
                                    <Text style={styles.td}>{item.input}</Text>
                                    <Text style={[styles.td, {color: normalizeColor(item.input)}]}>{normalizeColor(item.input)}</Text>
                                </View>
                            );
                        })
                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282c34'
    },
    w100: {
        width: '100%'
    },
    scrollViewContent: {
        paddingTop: 30,
        paddingBottom: 50,
        paddingHorizontal: 20
    },
    row: {
        width: '100%',
        flexDirection: 'row'
    },
    th: {
        fontSize: 18,
        fontWeight: 700,
        paddingTop: 20,
        color: '#FFFFFF'
    },
    td: {
        fontSize: 14,
        fontWeight: 500,
        paddingRight: 20,
        color: '#FFFFFF'
    }
});

export default App;
