import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { Boton } from '../components/Boton';
import { useCalculadora } from '../hooks/useCalculadora';



export const CalculadoraScreen = () => {

  const {numero, numeroAnterior, armarNumero, limpiar, del, postivioNegativo, sumar, restar, dividir, multiplicar, calcular} = useCalculadora();

  return (

    <View style={styles.calculadoraContainer}>

      {
        numeroAnterior !== "0" && (
          <Text style={styles.resultadoPequeno}>{ numeroAnterior }</Text>
        )
      }

      <Text 
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        
        { numero }
        
      </Text>

      <View style={styles.fila}>
        <Boton texto="C" color={"#9B9B9B"} accion={ limpiar }/>
        <Boton texto="+/-" color={"#9B9B9B"} accion={ postivioNegativo } />
        <Boton texto="Del" color={"#9B9B9B"} accion={ del } />
        <Boton texto="/" color={"#FF9427"} accion={ dividir }/>
      </View>

      <View style={styles.fila}>
        <Boton texto="7" accion={armarNumero}/>
        <Boton texto="8"  accion={armarNumero}/>
        <Boton texto="9" accion={armarNumero}/>
        <Boton texto="X" color={"#FF9427"} accion={ multiplicar } />
      </View>

      <View style={styles.fila}>
        <Boton texto="4" accion={armarNumero}/>
        <Boton texto="5"  accion={armarNumero}/>
        <Boton texto="6" accion={armarNumero}/>
        <Boton texto="-" color={"#FF9427"} accion={ restar } />
      </View>

      <View style={styles.fila}>
        <Boton texto="1" accion={armarNumero}/>
        <Boton texto="2"  accion={armarNumero}/>
        <Boton texto="3" accion={armarNumero}/>
        <Boton texto="+" color={"#FF9427"} accion={ sumar } />
      </View>
      
      <View style={styles.fila}>
        <Boton texto="0" ancho accion={armarNumero}/>
        <Boton texto="." accion={ armarNumero } />
        <Boton texto="=" color={"#FF9427"} accion={ calcular } />
      </View>

    </View>

  )
}
