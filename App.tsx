import React from 'react'

import {
  View,//it is just like div in web
  Text,
  Image,
  SafeAreaView//to avoid notches in mobies 
} from 'react-native'

function App(){
  return(
    <View>
      <Text>Hello World</Text>
      <Image source={require('./images/img.jpg')}
      />
    </View>
  )
}

export default App;