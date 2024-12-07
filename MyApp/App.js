
import { SafeAreaView, StyleSheet,Platform, ScrollView } from 'react-native';
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

  const squirtleData = {
    name: 'SquirtleData',
    image: require('./assets/christmas squirtle.jpeg'),
    type: 'Water',
    hp: 44,
    moves: ['Tackle', 'Water', 'Gun', 'Tailwhip', 'Withdraw'],
    weakness: ['Electric', 'Grass'],
  };

  const bulbasaurData = {
    name: 'SquirtleData',
    image: require('./assets/Chistmas doll.jpg'),
    type: 'Grass',
    hp: 45,
    moves: ['Tackle', 'vine whip', 'Growl', 'Leach Seed'],
    weakness: ['Fire', 'ice', 'Flying', 'Psychic'],
  };

  const santaData = {
    name: 'SantaData',
    image: require('./assets/christmas gift.jpg'),
    type: 'Water',
    hp: 44,
    moves: ['Quick Attack', 'Thunderbolt', 'Tail whip', 'Grow'],
    weakness: ['Ground'],
  }



  return (
    <ScrollView> <SafeAreaView style={styles.container}>
    <PokemonCard {...charmanderData}/>
    <PokemonCard {...squirtleData}/>
    <PokemonCard {...bulbasaurData}/>
    <PokemonCard {...santaData}/>
    </SafeAreaView></ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
