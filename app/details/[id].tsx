import { router, useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getProductById } from '../../data/products';

export default function ProductDetailScreen() {
  const { id, source } = useLocalSearchParams<{ id: string; source?: string }>()
  const product = getProductById(id)

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Товар не найден</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Назад</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      {source && (
        <Text style={{ color: '#2196F3', margin: 16, fontSize: 16 }}>
          Перешли со страницы: {source === 'catalog' ? 'Каталог' : source === 'home' ? 'Главная' : source}
        </Text>
      )}
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price.toLocaleString('ru-RU')} ₽</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.details}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Добавить в корзину</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  price: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2196F3',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    lineHeight: 22,
  },
  details: {
    fontSize: 14,
    color: '#999',
    marginBottom: 24,
    lineHeight: 20,
  },
  buyButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buyButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  error: {
    fontSize: 18,
    color: '#f44336',
    textAlign: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
})
