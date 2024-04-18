import React from 'react';
import {FlatList, StyleSheet} from "react-native";
import ProductsItems from "./productItems";

const ProductsList = ({products}) => {
    return(
        <FlatList
            data={products}
            keyExtractor={product => product.id.toString()}
            renderItem={({ item }) => {
                return <ProductsItems product={item} />;
            }}
            style={styles.flatList}
        />
    );
}

const styles = StyleSheet.create({
    flatList: {
        backgroundColor: 'grey'
    }
});

export default ProductsList;