import React from 'react'

import {
    View,
    Text,
    StyleSheet,//for styling
    useColorScheme//for dark mode or light mode
} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark' 
    return(
        <View style={styles.container}>
            <Text style = {isDarkMode ? styles.whiteText : styles.darkText}>
                Hello World
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',//works left to right opposite to web
        justifyContent: 'center'//works top to bottom opposite to web
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    }
})

export default AppPro;