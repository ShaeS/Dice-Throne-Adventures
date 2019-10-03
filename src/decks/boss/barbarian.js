export default {
  title: 'Fallen Barbarian',
  statusEffects: [],
  health: 10,
  panels: [
    [{
      title: 'Smackdown',
      rolls: [
        {
          roll: ['1-3', '1-3', '1-3', '1-3'],
          description: 'Deal 7 dmg.',
        },
        {
          roll: ['1-3', '1-3', '1-3', '1-3', '1-3'],
          description: 'Deal 9 dmg.',
        },
      ],
      description: 'On 4-of-a-kind (#\'s), inflict Concussion.',
    }],
    [{
      title: 'Low Blow',
      rolls: [
        {
          roll: ['1-3', '1-3', '1-3', '4-5'],
        },
      ],
      description: 'Deal 5 undefendable dmg.',
    }],
    [{
      title: 'Unhinged',
      rolls: [
        {
          roll: 'Small Straight',
          description: 'Deal 10 dmg, receive 3 dmg in return.',
        },
        {
          roll: 'Large Straight',
          description: 'Deal 15 dmg, receive 5 dmg in return.',
        },
      ],
      description: '(Return dmg only applies if at least 1 point of dmg was delt successfully)',
    }],
    [{
      title: 'Skull Bash',
      rolls: [
        {
          roll: ['6', '6', '6', '6'],
        },
      ],
      description: 'Inflict Stun. Then deal 6 undefendable dmg.',
    }],
    [{
      title: 'Pained Response',
      rolls: [
        {
          roll: ['4-5', '4-5', '4-5'],
          description: 'Deal 4 dmg. Heal 3.',
        },
        {
          roll: ['4-5', '4-5', '4-5', '4-5'],
          description: 'Deal 5 dmg. Heal 4.',
        },
        {
          roll: ['4-5', '4-5', '4-5', '4-5', '4-5'],
          description: 'Deal 6 dmg. Heal 5.',
        },
      ],
    }],
    [{
      title: 'Barbaric Roar',
      rolls: [
        {
          roll: ['4-5', '4-5', '6', '6'],
        },
      ],
      description: 'Inflict Concussion. Deal 3 Collateral dmg to all Engaged opponents.',
    }],
    [{
      title: 'Overload',
      rolls: [
        {
          roll: ['1-3', '1-3', '6', '6', '6'],
        },
      ],
      description: 'Roll 3 die: Then, deal dmg equal to the total roll value. If the roll value is less than 8, inflict Concussion.',
    }],
    [{
      defense: true,
      title: 'Stone Skin',
      dice: 3,
      description: 'Prevent 2x[4-5] dmg.',
    }],
  ],
  ultimate: {
    title: 'Explosive Rage!',
    rolls: [
      {
        roll: ['6', '6', '6', '6', '6'],
      },
    ],
    description: 'Inflict Stun & deal 10 undefendable dmg. Then deal 5 Collateral dmg to all Engaged opponents.',
  },
  cards: [
    {
      title: 'Skull Crush',
      description: 'inflict Stun on the Active Player.',
      phase: 'Main',
      cost: 5,
      rollObjective: ['1-3', '1-3', '1-3', '1-3', '1-3'],
    },
  ],
  upgrades: [
    {
      base: 'Low Blow',
      level: 2,
      cost: 2,
      new: [{
        title: 'Low Blow II',
        rolls: [
          {
            roll: ['1-3', '1-3', '1-3', '4-5'],
          },
        ],
        description: 'Deal 6 undefendable dmg.',
      }],
    },
    {
      base: 'Skull Bash',
      level: 3,
      cost: 4,
      new: [{
        title: 'Skull Bash III',
        rolls: [
          {
            roll: ['6', '6', '6', '6'],
          },
        ],
        description: 'Inflict Stun. Then deal 8 undefendable dmg.',
      }, {
        title: 'Skull Smash',
        rolls: [
          {
            roll: ['6', '6', '6'],
          },
        ],
        description: 'Inflict Concussion. Then deal 5 undefendable dmg.',
      }],
    },
  ],
};
