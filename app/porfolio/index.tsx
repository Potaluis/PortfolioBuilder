// app/portfolio/index.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';
import { IconSymbol } from '../../components/ui/IconSymbol';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from '../../hooks/useColorScheme';

export default function PortfolioScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const router = useRouter();

  const navigateToConfig = () => {
    // Usamos "as any" para evitar la verificación de tipos
    router.push('./config' as any);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Mi Portfolio</ThemedText>
        <ThemedText>Crea y personaliza tu portfolio profesional</ThemedText>
      </ThemedView>

      <ThemedView style={styles.actionCard}>
        <ThemedText type="subtitle">¡Bienvenido a PortfolioBuilder!</ThemedText>
        <ThemedText style={styles.cardText}>
          Comienza configurando tu portfolio con las opciones que prefieras. Podrás personalizar
          secciones, diseño y estilos.
        </ThemedText>
        <TouchableOpacity style={styles.configButton} onPress={navigateToConfig}>
          <IconSymbol
            name="house.fill"
            size={20}
            color="#fff"
          />
          <ThemedText style={styles.buttonText}>Configurar Portfolio</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.featureList}>
        <ThemedText type="subtitle">Funcionalidades</ThemedText>
        
        {[
          { title: 'Personalización completa', description: 'Adapta tu portfolio a tu estilo personal' },
          { title: 'Secciones a medida', description: 'Añade solo las secciones que necesitas' },
          { title: 'Diseño responsive', description: 'Se adapta perfectamente a cualquier dispositivo' },
          { title: 'Fácil de compartir', description: 'Comparte tu trabajo con un simple enlace' }
        ].map((feature, index) => (
          <ThemedView key={index} style={styles.featureItem}>
            <IconSymbol
              name="paperplane.fill"
              size={24}
              color={Colors[colorScheme].tint}
            />
            <View style={styles.featureContent}>
              <ThemedText type="defaultSemiBold">{feature.title}</ThemedText>
              <ThemedText>{feature.description}</ThemedText>
            </View>
          </ThemedView>
        ))}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 24,
    gap: 8,
  },
  actionCard: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    gap: 12,
  },
  cardText: {
    marginBottom: 8,
  },
  configButton: {
    backgroundColor: '#0a7ea4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  featureList: {
    gap: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
  },
  featureContent: {
    flex: 1,
    gap: 4,
  }
});