import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ProductsItems = ({product}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.textProductTitle}>Nombre del Producto: {product.name}</Text>
            <Image style={styles.imagen} source={product.imagen}/>
            <Text style={styles.textProductPrice}>Precio: ${product.price}</Text>
            <Text style={styles.textProductDescription}>Descripción: {product.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        color: 'white',
        alignItems: 'center',

    },
    textProductTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textProductPrice: {
        fontSize: 16
    },
    textProductDescription: {
        fontSize: 14
    },
    imagen:{
        width: '80%',
        height: 200,
        resizeMode: 'cover',
    }
});

export default ProductsItems;