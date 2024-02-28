import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ViewInput: {
    marginTop: '5%',
  },
  Menu: {
    position: 'absolute', 
    bottom: 40, 
    width: '90%', 
    height: '10%',
    backgroundColor: '#1B2122',
    borderRadius: 15,
    marginHorizontal: '10%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '7%',
  },
  BotaoFavoritos: {
    width: '40%',
    height: '50%',
    backgroundColor: '#64E3A1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  BotaoVoltar: {
    width: '40%',
    height: '50%',
    backgroundColor: '#FFF533',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }
});
