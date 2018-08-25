import React from 'react';
import { StyleSheet, View } from 'react-native';
import Jesus from './Application/UI/Jesus'
import { Provider } from 'react-redux';
import { store} from "./Application/Redux/Store";

console.disableYellowBox = ['Remote Debugger'];
console.ignoredYellowBox = ['Setting a timer'];

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>

        <Provider store={store}>

            <Jesus/>

        </Provider>

      </View>

    );//return

  }//render

}//class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/*//////////// INSTRUCCIONES PARA IMPLEMENTAR REDUX ////////////*/
/*


  1.- INSTALAR REDUX Y REACT REDUX (redux react-redux)

  2.- CREAR LA STORE

          import { createStore } from 'redux'
          const store = createStore(reducers);

  3.- COMBINE REDUCERS

          import { createStore, combineReducers } from 'redux'
          const reducers =  combineReducers({

              realTimeReducer,
              pruebaReducer,
              databaseReducer,

          });


  4.- CREAMOS NUESTROS REDUCERS

      const deptoFrutasReducer = (state = {manzanas:0, peras:0} , action) => {

        switch (action.type){

        case 'AGREGAR_MANZANAS':

            return action.value;

        default:
          return state;

  5.- IMPORTAMOS PROVIDER

      import { Provider } from 'react-redux';

  6.- IMPORTAMOS LA STORE

      import store from './application/redux/Store'


  7.- IMPLEMENTAMOS PROVIDER

   <Provider store={store}>
      <Jesus/>
   </Provider>


   8.- IMPLEMENTAMOS LOS METODOS CORRESPONDIENTES

   const mapStateToProps = store => {

    return{

        dataExample: store.reducerExample,

    }

  };


  const mapDispatchToProps = dispatch => {

    return{

            _example: value => { dispatch({type:'EXAMPLE', value})
    }


export default connect(mapStateToProps, mapDispatchToProps)(Component);


*/
/*/////////////////////////////////////////////////////////////*/