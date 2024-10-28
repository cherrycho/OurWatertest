// src/model.js
import * as tf from '@tensorflow/tfjs';
import { fetchWaterQualityData, preprocessData } from './data';

export const createModel = () => {
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 64, activation: 'relu', inputShape: [3] }));
  model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
  model.compile({
    optimizer: 'adam',
    loss: 'binaryCrossentropy',
    metrics: ['accuracy'],
  });
  return model;
};

export const trainModel = async (model) => {
  const { trainingData, trainingLabels } = await preprocessData();
  const xs = tf.tensor2d(trainingData);
  const ys = tf.tensor2d(trainingLabels, [trainingLabels.length, 1]);

  await model.fit(xs, ys, {
    epochs: 100,
    batchSize: 10,
    shuffle: true,
  });

  xs.dispose();
  ys.dispose();
};
