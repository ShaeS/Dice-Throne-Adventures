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
          roll: ['1-3', '1-3', '1-3', '6'],
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
            roll: ['1-3', '1-3', '1-3', '6'],
          },
        ],
        description: 'Deal 6 undefendable dmg.',
      }],
    },
    {
      base: 'Low Blow',
      level: 2,
      cost: 4,
      new: [{
        title: 'Low Blow III',
        rolls: [
          {
            roll: ['1-3', '1-3', '1-3', '6'],
          },
        ],
        description: 'Deal 7 undefendable dmg.',
      }],
    },
    {
      base: 'Skull Bash',
      level: 2,
      cost: 2,
      new: [{
        title: 'Skull Bash II',
        rolls: [
          {
            roll: ['6', '6', '6', '6'],
          },
        ],
        description: 'Inflict Stun. Then deal 7 undefendable dmg.',
      }, {
        title: 'Skull Smash',
        rolls: [
          {
            roll: ['6', '6', '6'],
          },
        ],
        description: 'Inflict Concussion. Then deal 4 undefendable dmg.',
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
    {
      base: 'Unhinged',
      level: 2,
      cost: 2,
      new: [{
        title: 'Unhinged II',
        rolls: [
          {
            roll: 'Small Straight',
            description: 'Deal 11 dmg, receive 3 dmg in return.',
          },
          {
            roll: 'Large Straight',
            description: 'Deal 16 dmg, receive 5 dmg in return.',
          },
        ],
        description: '(Return dmg only applies if at least 1 point of dmg was delt successfully)',
      }],
    },
    {
      base: 'Unhinged',
      level: 3,
      cost: 4,
      new: [{
        title: 'Unhinged III',
        rolls: [
          {
            roll: 'Small Straight',
            description: 'Deal 12 dmg, receive 4 dmg in return.',
          },
          {
            roll: 'Large Straight',
            description: 'Deal 17 dmg, receive 6 dmg in return.',
          },
        ],
        description: '(Return dmg only applies if at least 1 point of dmg was delt successfully)',
      }],
    },
    {
      base: 'Overload',
      level: 2,
      cost: 2,
      new: [{
        title: 'Overload II',
        rolls: [
          {
            roll: ['1-3', '1-3', '6', '6', '6'],
          },
        ],
        description: 'Roll 4 die: Then, deal dmg equal to the total roll value. If the roll value is less than 10, inflict Concussion. Then roll 1 die: Receive dmg equal to the roll value.',
      }],
    },
    {
      base: 'Overload',
      level: 3,
      cost: 4,
      new: [{
        title: 'Overload III',
        rolls: [
          {
            roll: ['1-3', '1-3', '6', '6', '6'],
          },
        ],
        description: 'Roll 4 die: Then, deal dmg equal to the total roll value. Inflict Concussion. Then roll 1 die: Receive dmg equal to the roll value.',
      }],
    },
    {
      base: 'Smackdown',
      level: 2,
      cost: 2,
      new: [{
        title: 'Smackdown II',
        rolls: [
          {
            roll: ['1-3', '1-3', '1-3'],
            description: 'Deal 6 dmg.',
          },
          {
            roll: ['1-3', '1-3', '1-3', '1-3'],
            description: 'Deal 8 dmg.',
          },
          {
            roll: ['1-3', '1-3', '1-3', '1-3', '1-3'],
            description: 'Deal 10 dmg.',
          },
        ],
        description: 'On 3-of-a-kind (#\'s), inflict Concussion.',
      }],
    },
    {
      base: 'Smackdown',
      level: 3,
      cost: 4,
      new: [{
        title: 'Smackdown III',
        rolls: [
          {
            roll: ['1-3', '1-3', '1-3'],
            description: 'Deal 7 dmg.',
          },
          {
            roll: ['1-3', '1-3', '1-3', '1-3'],
            description: 'Deal 9 dmg.',
          },
          {
            roll: ['1-3', '1-3', '1-3', '1-3', '1-3'],
            description: 'Deal 11 dmg.',
          },
        ],
        description: 'On 2-of-a-kind (#\'s), inflict Concussion.',
      }],
    },
    {
      base: 'Pained Response',
      level: 2,
      cost: 2,
      new: [{
        title: 'Pained Response II',
        rolls: [
          {
            roll: ['4-5', '4-5', '4-5'],
            description: 'Deal 5 dmg. Heal 3.',
          },
          {
            roll: ['4-5', '4-5', '4-5', '4-5'],
            description: 'Deal 6 dmg. Heal 4.',
          },
          {
            roll: ['4-5', '4-5', '4-5', '4-5', '4-5'],
            description: 'Deal 7 dmg. Heal 5.',
          },
        ],
      }],
    },
    {
      base: 'Pained Response',
      level: 3,
      cost: 4,
      new: [{
        title: 'Pained Response III',
        rolls: [
          {
            roll: ['4-5', '4-5', '4-5'],
            description: 'Deal 6 dmg. Heal 4.',
          },
          {
            roll: ['4-5', '4-5', '4-5', '4-5'],
            description: 'Deal 7 dmg. Heal 5.',
          },
          {
            roll: ['4-5', '4-5', '4-5', '4-5', '4-5'],
            description: 'Deal 8 dmg. Heal 6.',
          },
        ],
      }],
    },
    {
      base: 'Barbaric Roar',
      level: 2,
      cost: 2,
      new: [{
        title: 'Barbaric Roar II',
        rolls: [
          {
            roll: ['4-5', '4-5', '6', '6'],
          },
        ],
        description: 'Inflict Concussion. Deal 4 Collateral dmg to all Engaged opponents.',
      }],
    },
    {
      base: 'Barbaric Roar',
      level: 3,
      cost: 4,
      new: [{
        title: 'Barbaric Roar III',
        rolls: [
          {
            roll: ['4-5', '4-5', '6', '6'],
          },
        ],
        description: 'Inflict Concussion on & deal 4 Collateral dmg to all Engaged opponents.',
      }],
    },
    {
      base: 'Stone Skin',
      level: 2,
      cost: 3,
      new: [{
        defense: true,
        title: 'Stone Skin II',
        dice: 4,
        description: 'Heal 2x[4-5]. On [4,5][4,5], prevent 1 incoming negative status effect. On [6], deal 3 undefendable dmg.',
      }],
    },
    {
      base: 'Stone Skin',
      level: 3,
      cost: 4,
      new: [{
        defense: true,
        title: 'Stone Skin III',
        dice: 5,
        description: 'Heal 2x[4-5]. On [4,5][4,5], prevent 1 incoming negative status effect. On [6], deal 4 undefendable dmg.',
      }],
    },
  ],
};
