import ml5 from 'ml5';

let model;

export function loadModel(callback) {
  model = ml5.neuralNetwork('assets/models/model.json', modelLoaded);
}

function modelLoaded() {
  console.log('Model Loaded!');
  // You can now use the model for predictions
}

export function predict(data) {
  model.predict(data, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      console.log(results);
      // Handle the results
    }
  });
}
