// y = 2x + 1;
const data = [
  {
    x: 0,
    y: 1,
  },
  {
    x: 1,
    y: 3,
  },
  {
    x: 2,
    y: 5,
  },
];


let thetaZero = Math.random() * 2 -1;
let thetaOne = Math.random() * 2 -1;
const learningRate = 0.0001;
const learningIterations = 1000000;


const hypothesis = x => thetaZero + thetaOne * x;


const learn = () => {
  let thetaZeroSum = 0;
  let thetaOneSum = 0;

  for (let x = 0; x < data.length; x++) {
    thetaZeroSum += hypothesis(data[x].x) - data[x].y;
    thetaOneSum += (hypothesis(data[x].x) - data[x].y) * data[x].x;
  }

  thetaZero = thetaZero - (learningRate) * thetaZeroSum / data.length;
  thetaOne = thetaOne - (learningRate) * thetaOneSum / data.length;
}


for(let x = 0 ; x < learningIterations; x++) {
  learn();
}

console.log(thetaZero)
console.log(thetaOne)
