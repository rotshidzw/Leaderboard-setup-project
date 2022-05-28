const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';

const arrangeData = async () => {
  const response = await fetch(URL);
  const scores = await response.json();
  return scores;
};

const showData = async (player, scores) => {
  const answer = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: player, score: scores }),
  });
  const score = answer.json();
  return score;
};

export { arrangeData, showData };