// styles/configStyles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 24,
    gap: 8,
  },
  optionGroup: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    gap: 8,
  },
  draggableList: {
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 8,
  },
  sectionItem: {
    padding: 16,
    marginVertical: 4,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
  },
  sectionItemActive: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: '#e6f3fa',
  },
  sectionItemDisabled: {
    opacity: 0.6,
  },
  sectionItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  sectionItemText: {
    fontSize: 16,
  },
  sectionItemTextDisabled: {
    opacity: 0.7,
  },
  menuOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    gap: 8,
  },
  menuOption: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  menuOptionSelected: {
    backgroundColor: '#0a7ea4',
  },
  menuOptionText: {
    marginTop: 4,
    fontSize: 14,
    textAlign: 'center',
  },
  menuOptionTextSelected: {
    color: '#fff',
  },
  projectOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
    gap: 8,
  },
  projectOption: {
    width: '48%',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#f5f5f5',
  },
  projectOptionSelected: {
    backgroundColor: '#0a7ea4',
  },
  projectOptionText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
  },
  projectOptionTextSelected: {
    color: '#fff',
  },
  sliderContainer: {
    marginBottom: 16,
  },
  slider: {
    height: 40,
    marginTop: 8,
  },
  saveButton: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
    backgroundColor: '#2ecc71',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});