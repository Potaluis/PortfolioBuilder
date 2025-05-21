// app/(tabs)/index.tsx
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { HelloWave } from '../../components/HelloWave';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';

export default function HomeScreen() {
  const router = useRouter();

  const goToPortfolioConfig = () => {
    // @ts-ignore - Ignorar errores de tipos
    router.push('/portconfig');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">PortfolioBuilder</ThemedText>
        <ThemedText>
          Crea y personaliza tu portafolio profesional con configuraciones
          flexibles y diseños personalizados.
        </ThemedText>
      </ThemedView>
      
      <TouchableOpacity 
        style={styles.configButton} 
        onPress={goToPortfolioConfig}
      >
        <ThemedText style={styles.buttonText}>
          Configurar Portfolio
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 24,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 24,
  },
  configButton: {
    backgroundColor: '#0a7ea4',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});