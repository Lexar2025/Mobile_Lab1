import { router } from 'expo-router'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ProductCard } from '../components/ProductCard'
import { products } from '../data/products'

export default function HomeScreen() {
  const featuredProduct = products[0]

  const h = (id) => {
    router.push({ pathname: '/details/[id]', params: { id, source: 'home' } })
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Магазин гаджетов</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/catalog')}>
          <Text style={styles.buttonText}>Перейти к каталогу</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Рекомендуем</Text>
        <ProductCard
          product={featuredProduct}
          onPress={() => h(featuredProduct.id)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Популярные товары</Text>
        {products.slice(1, 4).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onPress={() => router.push({ pathname: '/details/[id]', params: { id: product.id, source: 'home' } })}
          />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    backgroundColor: '#2196F3',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2196F3',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
})
