import Slider from '@react-native-community/slider';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';

import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';
import { IconSymbol } from '../../components/ui/IconSymbol';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from '../../hooks/useColorScheme';
import { styles } from '../../styles/configStyles';

// Definir interfaces para los tipos de datos
interface Section {
  id: string;
  title: string;
  selected: boolean;
}

export default function PortfolioConfigScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  
  // Estado para las secciones disponibles y seleccionadas
  const [sections, setSections] = useState<Section[]>([
    { id: 'about', title: 'Sobre mí', selected: true },
    { id: 'projects', title: 'Proyectos', selected: true },
    { id: 'services', title: 'Servicios', selected: false },
    { id: 'blog', title: 'Blog', selected: false },
    { id: 'testimonials', title: 'Testimonios', selected: false },
    { id: 'contact', title: 'Contacto', selected: true },
    { id: 'cv', title: 'CV descargable', selected: true },
  ]);

  // Estado para la posición del menú
  const [menuPosition, setMenuPosition] = useState<'top' | 'left' | 'right'>('top');

  // Estado para el estilo de visualización de proyectos
  const [projectDisplayStyle, setProjectDisplayStyle] = useState<'grid' | 'list' | 'carousel' | 'masonry'>('grid');

  // Estado para el número de proyectos por fila
  const [projectsPerRowDesktop, setProjectsPerRowDesktop] = useState(3);
  const [projectsPerRowMobile, setProjectsPerRowMobile] = useState(1);

  // Función para alternar la selección de una sección
  const toggleSectionSelection = (id: string) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, selected: !section.selected } : section
    ));
  };

  // Función para manejar el reordenamiento
  const handleDragEnd = ({ data }: { data: Section[] }) => {
    setSections(data);
  };

  // Renderizar cada elemento en la lista arrastrable
  const renderSectionItem = ({ item, drag, isActive }: RenderItemParams<Section>) => {
    return (
      <TouchableOpacity
        style={[
          styles.sectionItem, 
          isActive && styles.sectionItemActive,
          !item.selected && styles.sectionItemDisabled
        ]}
        onLongPress={drag}
        onPress={() => toggleSectionSelection(item.id)}
        disabled={isActive}
      >
        <View style={styles.sectionItemContent}>
          <IconSymbol 
            name="house.fill"
            size={24} 
            color={item.selected ? Colors[colorScheme].tint : Colors[colorScheme].tabIconDefault} 
          />
          <ThemedText style={[
            styles.sectionItemText,
            !item.selected && styles.sectionItemTextDisabled
          ]}>
            {item.title}
          </ThemedText>
        </View>
        <IconSymbol name="chevron.right" size={24} color={Colors[colorScheme].tabIconDefault} />
      </TouchableOpacity>
    );
  };

  // Renderizar las opciones de posición del menú
  const renderMenuPositionOptions = () => (
    <ThemedView style={styles.optionGroup}>
      <ThemedText type="subtitle">¿Prefieres que el menú esté arriba o lateral?</ThemedText>
      <View style={styles.menuOptions}>
        {[
          { id: 'top' as const, label: 'Arriba' },
          { id: 'left' as const, label: 'Lateral izquierdo' },
          { id: 'right' as const, label: 'Lateral derecho' }
        ].map(option => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.menuOption,
              menuPosition === option.id && styles.menuOptionSelected
            ]}
            onPress={() => setMenuPosition(option.id)}
          >
            <IconSymbol 
              name="house.fill"
              size={24} 
              color={menuPosition === option.id ? '#fff' : Colors[colorScheme].text} 
            />
            <ThemedText style={[
              styles.menuOptionText,
              menuPosition === option.id && styles.menuOptionTextSelected
            ]}>
              {option.label}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </View>
    </ThemedView>
  );

  // Renderizar las opciones de visualización de proyectos
  const renderProjectDisplayOptions = () => (
    <ThemedView style={styles.optionGroup}>
      <ThemedText type="subtitle">¿Cómo prefieres mostrar tus proyectos?</ThemedText>
      <View style={styles.projectOptions}>
        {[
          { id: 'grid' as const, label: 'Cuadrícula de miniaturas' },
          { id: 'list' as const, label: 'Lista con texto y preview' },
          { id: 'carousel' as const, label: 'Estilo carrusel' },
          { id: 'masonry' as const, label: 'Mosaico dinámico (Pinterest)' }
        ].map(option => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.projectOption,
              projectDisplayStyle === option.id && styles.projectOptionSelected
            ]}
            onPress={() => setProjectDisplayStyle(option.id)}
          >
            <IconSymbol 
              name={option.id === 'list' ? 'paperplane.fill' : 'house.fill'}
              size={24} 
              color={projectDisplayStyle === option.id ? '#fff' : Colors[colorScheme].text} 
            />
            <ThemedText style={[
              styles.projectOptionText,
              projectDisplayStyle === option.id && styles.projectOptionTextSelected
            ]}>
              {option.label}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </View>
    </ThemedView>
  );

  // Renderizar las opciones de número de proyectos por fila
  const renderProjectsPerRowOptions = () => (
    <ThemedView style={styles.optionGroup}>
      <View style={styles.sliderContainer}>
        <ThemedText type="subtitle">
          ¿Cuántos proyectos quieres mostrar por fila en escritorio? ({projectsPerRowDesktop})
        </ThemedText>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={4}
          step={1}
          value={projectsPerRowDesktop}
          onValueChange={(value) => setProjectsPerRowDesktop(value)}
          minimumTrackTintColor={Colors[colorScheme].tint}
          maximumTrackTintColor={Colors[colorScheme].tabIconDefault}
          thumbTintColor={Colors[colorScheme].tint}
        />
      </View>
      
      <View style={styles.sliderContainer}>
        <ThemedText type="subtitle">
          ¿Cuántos proyectos quieres mostrar por fila en móvil? ({projectsPerRowMobile})
        </ThemedText>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={2}
          step={1}
          value={projectsPerRowMobile}
          onValueChange={(value) => setProjectsPerRowMobile(value)}
          minimumTrackTintColor={Colors[colorScheme].tint}
          maximumTrackTintColor={Colors[colorScheme].tabIconDefault}
          thumbTintColor={Colors[colorScheme].tint}
        />
      </View>
    </ThemedView>
  );

  // Función para guardar la configuración
  const saveConfiguration = () => {
    // Aquí implementarías la lógica para guardar en Firebase
    const configuration = {
      sections: sections.filter(section => section.selected).map(section => section.id),
      menuPosition,
      projectDisplayStyle,
      projectsPerRowDesktop,
      projectsPerRowMobile,
    };

    console.log('Configuración guardada:', configuration);
    // En una implementación real, aquí guardarías en Firebase:
    // firebase.firestore().collection('users').doc(userId).set({ portfolioConfig: configuration }, { merge: true });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{ 
          headerTitle: "Configuración de Portfolio",
          headerShadowVisible: false,
          headerBackTitle: "Atrás"
        }} 
      />
      <ScrollView style={styles.scrollView}>
        <ThemedView style={styles.header}>
          <ThemedText type="title">Configuración de tu Portfolio</ThemedText>
          <ThemedText>Personaliza cómo quieres mostrar tu trabajo</ThemedText>
        </ThemedView>

        <ThemedView style={styles.optionGroup}>
          <ThemedText type="subtitle">
            ¿Qué secciones te gustaría tener en tu portfolio?
          </ThemedText>
          <ThemedText>
            (Toca para seleccionar/deseleccionar, mantén presionado y arrastra para ordenar)
          </ThemedText>
          
          <DraggableFlatList
            data={sections}
            renderItem={renderSectionItem}
            keyExtractor={(item) => item.id}
            onDragEnd={handleDragEnd}
            containerStyle={styles.draggableList}
          />
        </ThemedView>

        {renderMenuPositionOptions()}
        {renderProjectDisplayOptions()}
        {renderProjectsPerRowOptions()}

        <TouchableOpacity style={styles.saveButton} onPress={saveConfiguration}>
          <ThemedText style={styles.saveButtonText}>Guardar configuración</ThemedText>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}