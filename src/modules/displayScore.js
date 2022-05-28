import scores from './score.js';

const displayScores = document.querySelector('.scores');
const showScores = () => {
  scores.forEach((goal, index) => {
    let listTag = '';
    listTag = `
    <li class="score-item" id="${index}">${goal.name}: ${goal.score}</li>
`;
    displayScores.innerHTML += listTag;
  });

  return displayScores;
};

export default showScores;