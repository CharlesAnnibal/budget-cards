
import { StyleSheet } from 'react-native';


export let styles = StyleSheet.create({
  card: {
    width: '47%',
    marginHorizontal: '1.5%',
    marginVertical: '3%',
    height: 80,
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 0.5,
    borderColor: '#777',
  },
  colorIdentifierRow: {
    backgroundColor: 'blue',
    width: '100%'
  },
  progressBarRow: {
    justifyContent: 'center',
  },
  overviewCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    width: '95%',
    height: '100%',
    alignItems: 'flex-start',
    borderRadius: 5,
    paddingBottom: 30,
  },
  text: {
    fontSize: 14,
    justifyContent: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#555',
    /*textShadowColor: '#000',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 3*/
  }
})


export function identifier(color) {
  let styles = {
    marginTop:5,
    backgroundColor: color,
    width: '20%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  }
  return styles;
}