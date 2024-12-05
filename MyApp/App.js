
import { SafeAreaView, StyleSheet,Platform } from 'react-native';
import PokemonCard from './components/PokemonCard'


export default function App() {

  const charmanderData ={
    name: 'Charmander',
    image: require('./assets/Chistmas doll.jpg'),
    type: 'Fire',
    hp: 39,
    moves: ['Scratch', 'Ember', 'Grow', 'Leer'],
    weakness: ['water', 'Rock'],
  };


  return (
    <SafeAreaView style={styles.container}>
    <PokemonCard {...charmanderData}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
