import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native'
import { Product } from '../data/products'
import { router } from 'expo-router'

interface ProductCardProps {
  product: Product
  onPress?: () => void
}

export function ProductCard({ product, onPress }: ProductCardProps) {
  const handlePress = () => {
    if (onPress) {
      onPress()
    } else {
      router.push(`/details/${product.id}`)
    }
  }

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {product.description}
        </Text>
        <Text style={styles.price}>{product.price.toLocaleString('ru-RU')} ₽</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 8,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2196F3',
  },
})
