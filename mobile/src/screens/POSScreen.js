import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { productService } from '../services/api';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsError } from '../redux/productSlice';

const POSScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { items: products } = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.items);

  React.useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    dispatch(fetchProductsStart());
    try {
      const response = await productService.getAll();
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      dispatch(fetchProductsError(error.message));
    }
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      productId: product.id,
      name: product.name,
      price: parseFloat(product.retailPrice),
      quantity: 1,
    }));
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => handleAddToCart(item)}
    >
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>ZMW {item.retailPrice}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Point of Sale</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
          <Text style={styles.cartBadge}>Cart ({cartItems.length})</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#1976d2',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartBadge: {
    color: '#fff',
    backgroundColor: '#d32f2f',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  productCard: {
    flex: 1,
    margin: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
  },
  productName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    color: '#1976d2',
    fontWeight: 'bold',
  },
});

export default POSScreen;
