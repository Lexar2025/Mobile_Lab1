import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ProfileScreen() {
  const router = useRouter();

  const handleEditPress = () => {
    // Здесь можно добавить логику редактирования
    alert('Редактировать профиль');
  };

  return (
    <ThemedView style={styles.container}>
      {/* Avatar */}
      <Image
        source={require('@/assets/images/partial-react-logo.png')}
        style={styles.avatar}
        contentFit="cover"
        transition={200}
      />

      {/* Name */}
      <ThemedText type="title" style={styles.name}>
        Алексей
      </ThemedText>

      {/* Description */}
      <ThemedText style={styles.description}>
        Молодой программист, студент университета. Увлекаюсь разработкой мобильных приложений и изучаю новые технологии.
      </ThemedText>

      {/* Edit Button */}
      <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
        <ThemedText style={styles.editButtonText}>Редактировать профиль</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#007AFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  editButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
