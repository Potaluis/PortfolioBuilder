// RUTA EXACTA: /app/(tabs)/index.tsx - MODIFICAR EL EXISTENTE

// Añade esta importación al principio:
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';

// Después, dentro de la función HomeScreen, añade esto antes del return:
const router = useRouter();

const goToPortfolioConfig = () => {
  // @ts-ignore - Ignorar errores de tipos
  router.push('/portconfig');
};

// Y añade este botón en algún lugar del componente:
<TouchableOpacity 
  style={{
    backgroundColor: '#0a7ea4',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  }} 
  onPress={goToPortfolioConfig}
>
  <ThemedText style={{ color: '#fff', fontWeight: 'bold' }}>
    Configurar Portfolio
  </ThemedText>
</TouchableOpacity>