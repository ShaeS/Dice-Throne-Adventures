export default [
  {
    level: 1,
    layout: [
      [
        null,
        { level: 3, loot: false, boss: true },
        null,
        null,
        null,
        null,
      ],
      [
        { level: 3, loot: false, boss: true },
        { level: 3, loot: 3, boss: false },
        { level: 3, loot: false, boss: false },
        { level: 2, loot: false, boss: false },
        { level: 1, loot: false, boss: false },
        { level: 1, loot: false, boss: false },
      ],
      [
        null,
        { level: 3, loot: false, boss: true },
        null,
        null,
        { level: 3, loot: 3, boss: false },
        { level: 1, loot: false, boss: false },
      ],
      [
        null,
        null,
        null,
        { level: 2, loot: false, boss: false },
        { level: 1, loot: false, boss: false },
        { level: 1, loot: false, boss: false },
      ],
      [
        null,
        { start: true },
        { level: 1, loot: false, boss: false },
        { level: 1, loot: false, boss: false },
        { level: 2, loot: false, boss: false },
        { level: 1, loot: 1, boss: false },
      ],
    ],
  },
];
