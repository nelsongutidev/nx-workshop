const games = [
  {
    id: 'settlers-in-the-can',
    name: 'Settlers in the Can',
    image: 'https://media.giphy.com/media/xUNda3pLJEsg4Nedji/giphy.gif', ///assets/beans.png', //
    description:
      'Help your bug family claim the best real estate in a spilled can of beans.',
    price: 35,
    rating: Math.random(),
  },
  {
    id: 'chess-pie',
    name: 'Chess Pie',
    image: 'https://media.giphy.com/media/iCZyBnPBLr0dy/giphy.gif', // '/assets/chess.png', //
    description: 'A circular game of Chess that you can eat as you play.',
    price: 15,
    rating: Math.random(),
  },
  {
    id: 'purrfection',
    name: 'Purrfection',
    image: 'https://media.giphy.com/media/12xMvwvQXJNx0k/giphy.gif', // /assets/cat.png', //
    description: 'A cat grooming contest goes horribly wrong.',
    price: 45,
    rating: Math.random(),
  },
];

export const getAllGames = () => games;
export const getGame = (id: string) => games.find((game) => game.id === id);
