// Import dependencies
const fs = require('fs');
const ml5 = require('ml5');

// Path to your dataset
const datasetPath = './data/water_pollution_basin.json';
let data = JSON.parse(fs.readFileSync(datasetPath));

// Preprocess data for ML5 Neural Network
const inputs = data.map(item => [item.basins_monitored, item.n_basins, item.proportion]);
const outputs = data.map(item => {
    return item.status === 'clean' ? 1 :
           item.status === 'slightly-polluted' ? 2 : 3;
});

// Set up the neural network options
const options = {
    task: 'regression',
    debug: true,
    layers: [
        { type: 'dense', units: 16, activation: 'relu' },
        { type: 'dense', units: 16, activation: 'relu' },
        { type: 'output', units: 1, activation: 'sigmoid' }
    ]
};

// Initialize ML5 neural network
const nn = ml5.neuralNetwork(options);

// Add data to the neural network
inputs.forEach((input, i) => {
    nn.addData(input, outputs[i]);
});

// Normalize the data and train the model
nn.normalizeData();
nn.train({ epochs: 20 }, finishedTraining);

// Callback after training
function finishedTraining() {
    console.log('Model trained!');
    // Save the model
    nn.save('./models/trainedModel', () => {
        console.log('Model saved');
    });
}
