// FROM VIDEO AFK - DICE THRONE ADVENTURES up to 42m

export default [
  {
    title: 'Enthropy Mage',
    enemyType: 1,
    health: 12,
    CP: 2,
    rewards: 'green',
    rollObjective: [[4, 5], [4, 5], [6]],
    firstStrike: false,
    attacks: [
      {
        title: 'Chaotic Sorcery',
        roll: [[4, 5], [4, 5], [6]],
        description: 'Roll 1 die: On [1,2,3], gain 2 Chaos Tokens. Then deal 4 + 1 dmg per Chaos Token.',
      },
    ],
    defense: {
      dice: 3,
      description: 'Gain 1 x [4,5] Chaos Tokens. Then deal 1 x Chaos Token dmg.',
    },
  },
  {
    title: 'Lost Swordsman',
    enemyType: 1,
    health: 11,
    CP: 0,
    rewards: 'green',
    rollObjective: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
    firstStrike: true,
    attacks: [
      {
        title: 'En Garde',
        roll: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
        description: 'Deal 4 Damage.',
      },
      {
        title: 'En Garde',
        roll: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
        description: 'Deal 5 Damage.',
      },
    ],
    defense: {
      dice: 3,
      description: 'Deal 1 x [1,2,3] + 2 x [6] dmg. Prevent 1 x [4,5] dmg',
    },
  },
];
