
import { StyleSheet } from 'react-native';


export let styles = StyleSheet.create({
  card: {
    width: '47%',
    marginHorizontal: '1.5%',
    marginVertical: '3%',
    height: 70,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation:2,

  },
  flexbox:{
    display:'flex',
    height:60,
    width:'100%',
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems:'flex-start',
    textAlign:'left'
  },
  colorIdentifierRow: {
    flexDirection:'row',
    flex:1
  },
  textRow:{
    display:'flex',
    flexDirection:'row', 
    flex:1,
  },  
  progressBarRow: {
    flex:1,
    justifyContent:'center',
    width:'100%',
    paddingHorizontal:'10%'
  },
 
  text: {
    flex:1,
    textAlign:'center',
    fontSize: 16,
    color: '#001489',
    paddingHorizontal:'5%'
    /*textShadowColor: '#000',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 3*/
  }
})


export function identifier(color) {
  let styles = {
    backgroundColor: color,
    width: '20%',
    height:'80%',
    borderColor:'yellow',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 15
  }
  return styles;
}