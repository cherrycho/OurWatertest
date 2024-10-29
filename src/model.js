import { loadModel, predict } from './mlModel';
import * as FileSystem from 'expo-file-system';

export function loadCSVData(filePath) {
  // Load CSV data from your assets
  return FileSystem.readAsStringAsync(FileSystem.documentDirectory + filePath)
    .then((data) => {
      // Process CSV data into a usable format
      console.log('Data Loaded:', data);
      return data;
    })
    .catch((error) => console.error('Error loading data:', error));
}

// Call this function in your component to load the model
export function initializeModel() {
  loadModel(() => {
    console.log('Model is ready for predictions!');
  });
}
