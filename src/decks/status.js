export default [
  {
    title: 'Black Out',
    description: 'A player with this token may not activate their Small or Large Straight abilities. At the conclusion of the turn remove this token.',
    limit: 1,
  },
  {
    title: 'Salve',
    description: 'Spend this token to heal one die of dmg. If used at the discovery of the boss, you may reroll the die one time.',
    limit: 1,
  },
  {
    title: 'Chaos Token',
    limit: 10,
  },
  {
    title: 'Blood Power',
    limit: 1,
  },
  {
    title: 'Retribution',
    description: 'This token may be spent after being attacked as a result of an opponents Offensive Roll Phase to deal half of the incoming dmg (rounded up) back to the attacker.',
    limit: 1,
  },
  {
    title: 'Entangle',
    description: 'A player afflicted with this token gets 1 fewer roll attempts during their next Offensive Roll Phase. At the conclusion of the Roll Phase, remove this token.',
    limit: 1,
  },
  {
    title: 'Blind',
    description: 'The next time a player afflicted with this token concludes their Offensive Roll Phase, they must remove this token and roll 1 die. On 1-2, their Offensive Roll Phase fails and has no effect of any kind.',
    limit: 1,
  },
  {
    title: 'Wither',
    description: 'If a player with a Wither token would deal dmg as a result of their Offensive Roll Phase, reduce that dmg by 1 per Wither token. Persistent.',
    limit: 2,
  },
  {
    title: 'Barbed Vine',
    description: 'A player with this token recieves 1 dmg for each toll attempt beyond the first during their Offensive Roll Phase. At the conclusion of their Roll Phase, remove this token.',
    limit: 1,
  },
  {
    title: 'Concussion',
    description: 'A player afflicted with this token must skip their Income Phase and then remove this token.',
    limit: 1,
  },
  {
    title: 'Poison',
    description: 'A player afflicted with this token is dealt 1 dmg per Poison token during the Upkeep Phase of their turn. Persistent.',
    limit: 3,
  },
  {
    title: 'Delayed Poison',
    description: 'A player inflicted with this token removes it at the conclusion of their turn and then recieves 3 dmg.',
    limit: 2,
  },
  {
    title: 'Silence',
    description: 'Unknown',
    limit: 1,
  },
  {
    title: 'Knockdown',
    description: 'To remove this token a player afflicted with it must spend 2 CP at the start of their Offensive Roll Phase. If that player does not, they must skip their Offensive Roll Phase, then remove this token.',
    limit: 1,
  },
  {
    title: 'Sneak Attack',
    description: 'A player with this token may spend it at the conclusion of the Offensive Roll Phase to roll 1 die and add the value of the die to their damage total. Attack modifier.',
    limit: 1,
  },
  {
    title: 'Bleed',
    description: 'A player afflicted with this token must roll 1 die during their Upkeep Phase. On 1-4, they are dealt 1 dmg. On 5-6, remove this token.',
    limit: 2,
  },
  {
    title: 'Evasive',
    description: 'When a Player with Evasive recieves damage, they may choose to spend this token. If spent, roll 1 die. If the outcome is 1-2, no damage is recieved (although other associated effects may still apply). Multiple Evasive tokens may be spent in an attempt to prevent the same source of damage.',
    limit: 3,
  },
  {
    title: 'Targeted',
    description: 'When a Player afflicted with this token is Attacked by an opponent, the attack dmg is increased by 2. Persistent.',
    limit: 1,
  },
  {
    title: 'Crit',
    description: 'If a player with this token is dealing at least 5 dmg as a result of their Offensive Roll Phase, this token may be spent to deal +4 dmg. Attack Modifier.',
    limit: 1,
  },
  {
    title: 'Protect',
    description: 'A player with this token may spend it at any time to reduce incoming dmg by half. (rounded up)',
    limit: 1,
  },
  {
    title: 'Accuracy',
    description: 'A player with this token may spend it at the conclusion of their Offensive Roll Phase to make their attack undefendable.',
    limit: 1,
  },
  {
    title: 'Shadows',
    description: 'When a player with this token is damaged as a result of an opponent\'s Offensive Roll Phase, no damage is recieved and no defense is made (although the attack "suceeds" & other effects may apply). Discard this token after the affected player starts & concludes a single turn while under it\'s effects.',
    limit: 1,
  },
  {
    title: 'Cleanse',
    description: 'A player with this token may discard it at any time to remove a single status effect from themselves.',
    limit: 3,
  },
  {
    title: 'Burn',
    description: 'A player afflicted with this token is dealt 2 dmg during the upkeep phase of their turn. Persistent.',
    limit: 1,
  },
  {
    title: 'Smoke Bomb',
    description: 'When a player with this token recieves dmg, they may choose to spend it. If spent, roll 1 die. If the outcome is 1-3, no dmg is recieved (although other associated effects may still apply).',
    limit: 1,
  },
  {
    title: 'Mesmerize',
    description: 'A player with this token may spend it and roll 1 die. On 5-6, you may force the opponent to re-roll any 1 die.',
    limit: 1,
  },
  {
    title: 'Flight',
    description: 'A player with this token may spend it at any time during the Roll Phase. Once spent, roll 2 die. If a 6 was rolled, Activate this token. If activated during the Offensive Roll Phase, this player\'s Attack becomes undefendable. If activated during the Defensive Roll Phase, ignore all incoming damage.',
    limit: 3,
  },
  {
    title: 'Blinding Light',
    description: 'The next time a player afflicted with this token concludes their Offensive Roll Phase, they must remove this token and roll 1 die: On 1, their Offensive Roll Phase has no effect of any kind. On 2-3, any dmg they deal for the remainder of the Roll Phase is reduced by 1/2. (rounded up)',
    limit: 1,
  },
  {
    title: 'Constrict',
    description: 'A player with thi token only recieves 1 roll during their Offensive Roll Phase. 1 CP must be paid for each additional roll attempt beyond the first.',
    limit: 1,
  },
  {
    title: 'Malfunction',
    description: 'A player with this token must discard 1 card at the conclusion of their turn. If a card was discarded in this way, remove this token.',
    limit: 1,
  },
  {
    title: 'Powder Keg',
    description: 'A player afflicted with this token must roll 1 die during their Upkeep Phase. On 1-2, the keg blows up. On 3-5, nothing happens. On 6, the player afflicted with Powder Keg may transfer the token to a chosen player. Additionally, if a player becomes inflicted with Powder Keg while already inflicted with Powder Keg, the first Keg immediately blows up. When a Keg blows up, remove it and deal 3 as an isolated source of undefendable dmg.',
    limit: 1,
  },
  {
    title: 'Parlay',
    description: 'A player afflicted with Parlay may not deal any damage as a result of their Offensive Roll Phase (although other effects may still apply). At the conclusion of the Roll Phase, remove this token.',
    limit: 1,
  },
  {
    title: 'Bounty',
    description: 'When a player afflicted with this token is Attacked by an opponent, the attacker increases their dmg by 1 and gains 1CP. Persistent.',
    limit: 1,
  },
  {
    title: 'Shame',
    description: 'When a player afflicted by Shame would deal dmg as a result of their Offensive Roll Phase, remove this token and reduce that dmg by 1. Attack Modifier.',
    limit: 2,
  },
  {
    title: 'Honor',
    description: 'Spend to increase your Attack dmg by 1 or spend 2 Honor to increase your Attack dmg by 3. Attack Modifier.',
    limit: 2,
  },
  {
    title: 'Back Strike',
    description: 'When a player with Back Stroke recieves dmg as a result of an opponent\'s Offensive Roll Phase, they may choose to spend this token. If spent, roll 1 die. Then deal 1/2 the value as dmg (rounded up) to the attacking player.',
    limit: 1,
  },
];
