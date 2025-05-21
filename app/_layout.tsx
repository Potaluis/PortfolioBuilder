// RUTA EXACTA: /app/_layout.tsx
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Inicio' }} />
        <Stack.Screen name="config" options={{ title: 'Configuración' }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}