import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ScrollView} from 'react-native';
const logoImg = require('./assets/favicon.png')


export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor:'plum', padding: 60}}>
      <ScrollView>
      <Image source={logoImg} style={{height:200, width: 200}} />
      <Text>
      Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph 
      to create a short story. 
      Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't
      know exactly how many sentences will appear in the random paragraph.
      </Text>
      <Image source={logoImg} style={{height:200, width: 200}} />
      </ScrollView>
    </View>
  )}
