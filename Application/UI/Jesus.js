import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, StatusBar} from 'react-native';
import { connect } from 'react-redux'
import {deptoLacteosReducer} from "../Redux/Reducers";

class Jesus extends React.Component {
    render() {

        const { deptoFrutas } = this.props;
        const { deptoLacteos } = this.props;

        console.log(deptoFrutas);
        console.log(deptoLacteos);

        return (
            <View style={styles.container}>

                <StatusBar barStyle="light-content"/>

                    {/*Fruit*/}
                <View style={{marginTop:16}}>

                    <TouchableOpacity style={styles.buttonStyle}
                                      onPress={ () => {this.props._agregarManzanas(2)} }>

                        <Text style={{color:'#214355', fontWeight:'bold'}}>Agregar Manzanas</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle}
                                      onPress={ () => {this.props._quitarManzanas(2)} }>

                        <Text style={{color:'#214355', fontWeight:'bold'}}>Quitar Manzanas</Text>

                    </TouchableOpacity>

                </View>


                <View style={{marginTop:16}}>

                    <TouchableOpacity style={styles.buttonStyle}
                                      onPress={ () => {this.props._agregarPeras(10)} }>

                        <Text style={{color:'#214355', fontWeight:'bold'}}>Agregar Peras</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle}
                                      onPress={ () => {this.props._quitarPeras(5)} }>

                        <Text style={{color:'#214355', fontWeight:'bold'}}>Quitar Peras</Text>

                    </TouchableOpacity>

                </View>

                <View style={{marginTop:16}}>

                    <TouchableOpacity style={styles.buttonStyle}
                                  onPress={ () => {this.props._agregarLeche(100)} }>

                        <Text style={{color:'#214355', fontWeight:'bold'}}>Agregar Leche</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle}
                                  onPress={ () => {this.props._quitarLeche(100)} }>

                        <Text style={{color:'#214355', fontWeight:'bold'}}>Quitar Leche</Text>

                    </TouchableOpacity>

                </View>

                <View style={{marginTop:16}}>

                    <TouchableOpacity style={styles.buttonStyle}
                                  onPress={ () => {this.props._agregarHuevos(5)} }>

                        <Text style={{color:'#214355', fontWeight:'bold'}}>Agregar Huevos</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle}
                                  onPress={ () => {this.props._quitarHuevos(5)} }>

                        <Text style={{color:'#214355', fontWeight:'bold'}}>Quitar Huevos</Text>

                    </TouchableOpacity>

                </View>

            </View>

        );//return

    }//render

}//class

const styles = StyleSheet.create({
    container: {

        flex: 1,
        width:'100%',
        backgroundColor: '#214355',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonStyle:{

        width:200,
        height:30,
        backgroundColor:'rgba(255,255,255,0.6)',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        marginTop:8,

    }

});//styles


const mapStateToProps = store => {

    return{

        deptoFrutas: store.deptoFrutasReducer,
        deptoLacteos: store.deptoLacteosReducer,

    }

};


const mapDispatchToProps = dispatch => {

    return {

        _agregarManzanas: value => {dispatch({type: 'AGREGAR_MANZANAS', value})},
        _quitarManzanas: value => {dispatch({type: 'QUITAR_MANZANAS', value})},

        _agregarPeras: value => {dispatch({type: 'AGREGAR_PERAS', value})},
        _quitarPeras: value => {dispatch({type: 'QUITAR_PERAS', value})},

        _agregarLeche: value => {dispatch({type: 'AGREGAR_LECHE', value})},
        _quitarLeche: value => {dispatch({type: 'QUITAR_LECHE', value})},

        _agregarHuevos: value => {dispatch({type: 'AGREGAR_HUEVOS', value})},
        _quitarHuevos: value => {dispatch({type: 'QUITAR_HUEVOS', value})}



    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Jesus);