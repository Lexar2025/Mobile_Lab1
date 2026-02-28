import { router } from 'expo-router'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { ProductCard } from '../../components/ProductCard'
import { products } from '../../data/products'

export default function CatalogScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Каталог товаров</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => router.push({ pathname: '/details/[id]', params: { id: item.id, source: 'catalog' } })}
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  list: {
    padding: 8,
  },
})
