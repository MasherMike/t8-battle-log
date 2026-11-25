// Anti-character guide index — read by index.html (Matchups tab).
// The weekly scheduled task appends one entry here per new guide.
//
// Fields:
//   character  Display name, must match queue.md
//   file       Path to the standalone guide, relative to index.html
//   artifact   claude.ai artifact link (optional)
//   tags       The guide's title tags — the one-line takeaways
//   step       Recommended step direction from the Movement section
//   record     Your ranked record vs this character as Victor when the guide was built
//   added      Date the guide was added (YYYY-MM-DD)

window.GUIDES = [
  {
    character: 'Victor',
    file: 'guides/Anti-Victor.html',
    artifact: 'https://claude.ai/artifact/Ca1pDa973nyEWx5aSGu5yb',
    tags: ['SW Right', 'HS tracks Right'],
    step: 'SSR',
    record: { w: 7, l: 4 },
    added: '2026-10-03'
  },
  {
    character: 'Bob',
    file: 'guides/Anti-Bob.html',
    artifact: 'https://claude.ai/artifact/YJUB7HN8ZEGS1KDZ18rvTj',
    tags: ['SW Right'],
    step: 'SSR',
    record: { w: 10, l: 7 },
    added: '2026-10-03'
  },
  {
    character: 'Jin',
    file: 'guides/Anti-Jin.html',
    artifact: 'https://claude.ai/artifact/BNi1BSSZkcwtqFYDBPaE7d',
    tags: ['SSR/SWR Default', 'EWHF +5~6 oB'],
    step: 'SSR',
    record: { w: 9, l: 16 },
    added: '2026-10-03'
  },
  {
    character: 'Lili',
    file: 'guides/Anti-Lili.html',
    artifact: 'https://claude.ai/artifact/K1qur7ndKEd2GS4UdBPzAE',
    tags: ['SSR Default', "Don't Step Backturn"],
    step: 'SSR',
    record: { w: 14, l: 8 },
    added: '2026-10-03'
  },
  {
    character: 'Dragunov',
    file: 'guides/Anti-Dragunov.html',
    artifact: 'https://claude.ai/artifact/1gmUFPVEz5QFA1usycxZyQ',
    tags: ['SSR', 'Tackles Whiff Left'],
    step: 'SSR',
    record: { w: 11, l: 20 },
    added: '2026-10-03'
  },
  {
    character: 'Miary Zo',
    file: 'guides/Anti-Miary-Zo.html',
    artifact: 'https://claude.ai/artifact/2T3hxEtHjXjBAX354XBeY3',
    tags: ['Duck BAO.1', 'Heat Smash → BAO +6'],
    step: 'SSL',
    record: { w: 9, l: 9 },
    added: '2026-10-03'
  },
  {
    character: 'Hwoarang',
    file: 'guides/Anti-Hwoarang.html',
    artifact: 'https://claude.ai/artifact/ER1nkNzao69aH8qdtMV4zE',
    tags: ['SSR Default', "Flamingo Can't Block"],
    step: 'SSR',
    record: { w: 10, l: 13 },
    added: '2026-10-03'
  },
  {
    character: 'Heihachi',
    file: 'guides/Anti-Heihachi.html',
    artifact: 'https://claude.ai/artifact/GC1pfnnGpScaqrFqKQN5KP',
    tags: ['SSL', 'Heat Smash +10 → RAI'],
    step: 'SSL',
    record: { w: 8, l: 2 },
    added: '2026-10-03'
  },
  {
    character: 'Eddy',
    file: 'guides/Anti-Eddy.html',
    artifact: 'https://claude.ai/artifact/CN6GVKPDe86j4TUPYBmHN2',
    tags: ['SSR', 'Mids Beat RLX', "HSP Can't Block"],
    step: 'SSR',
    record: { w: 7, l: 5 },
    added: '2026-10-09'
  },
  {
    character: 'Zafina',
    file: 'guides/Anti-Zafina.html',
    artifact: 'https://claude.ai/artifact/GmJL19EM42iz5mrvguwuqK',
    tags: ['SSR Default', 'PC Scarecrow', 'Duck Heat Smash'],
    step: 'SSR',
    record: { w: 0, l: 4 },
    added: '2026-10-09'
  },
  {
    character: 'Armor King',
    file: 'guides/Anti-Armor-King.html',
    artifact: 'https://claude.ai/artifact/MN71CqcFqU262aVBG9XS3v',
    tags: ['SSR Default', 'Duck Neck Hunter', 'Heat Smash +9'],
    step: 'SSR',
    record: { w: 5, l: 7 },
    added: '2026-10-16'
  },
  {
    character: 'Anna',
    file: 'guides/Anti-Anna.html',
    artifact: 'https://claude.ai/artifact/TT3pjbiMNLtRCr1aRryz6M',
    tags: ['SSR Default', 'Mid Checks CJM', 'Stay Crouched'],
    step: 'SSR',
    record: { w: 3, l: 6 },
    added: '2026-10-23'
  },
  {
    character: 'Devil Jin',
    file: 'guides/Anti-Devil-Jin.html',
    artifact: 'https://claude.ai/artifact/DgyWR1XQZnwDx5NXjezqzS',
    tags: ['SSR Default', 'Duck uf+1', 'MCR Has No Lows'],
    step: 'SSR',
    record: { w: 14, l: 6 },
    added: '2026-10-30'
    },
  {
    character: 'Alisa',
    file: 'guides/Anti-Alisa.html',
    artifact: 'https://claude.ai/artifact/TpmoedVzTc1z6YH3zNGfPn',
    tags: ['SSR Default', 'SWL vs Chainsaws', 'Duck DBT.1'],
    step: 'SSR',
    record: { w: 1, l: 5 },
    added: '2026-11-06'
  },
  {
    character: 'Leo',
    file: 'guides/Anti-Leo.html',
    artifact: 'https://claude.ai/artifact/DzHq3pwp1HijmP2PzmgoS8',
    tags: ['SSR Default', 'Stand Block KNK', "BOK Can't Block"],
    step: 'SSR',
    record: { w: 2, l: 6 },
    added: '2026-11-13'
  },
  {
    character: 'Kuma',
    file: 'guides/Anti-Kuma.html',
    artifact: 'https://claude.ai/artifact/X3dJTmZ2oMJdg6KWNuQkz6',
    tags: ['SSR Default', 'Mid-Check HBS', 'Low Parry db2+3'],
    step: 'SSR',
    record: { w: 3, l: 7 },
    added: '2026-11-13'
  },
  {
    character: 'Bryan',
    file: 'guides/Anti-Bryan.html',
    artifact: 'https://claude.ai/artifact/DjKumapNnU8rAsD2kcMvuQ',
    tags: ['SSR Default', 'Duck the High Strings', 'Punish uf+1 -13'],
    step: 'SSR',
    record: { w: 9, l: 6 },
    added: '2026-11-14'
  },
  {
    character: 'Lee',
    file: 'guides/Anti-Lee.html',
    artifact: 'https://claude.ai/artifact/Cw6VuvpoH4Q76PeGea6muf',
    tags: ['SSR Close', 'Duck the Magic 4', 'High Power Crushes'],
    step: 'SSR',
    record: { w: 12, l: 5 },
    added: '2026-11-15'
  },
  {
    character: 'Nina',
    file: 'guides/Anti-Nina.html',
    artifact: 'https://claude.ai/artifact/BYPhLghEM8Vgo2LrArLNgZ',
    tags: ['SSR Close', 'Duck the Gunshots', 'Respect SS Cancels'],
    step: 'SSR',
    record: { w: 4, l: 5 },
    added: '2026-11-16'
  },
  {
    character: 'King',
    file: 'guides/Anti-King.html',
    artifact: 'https://claude.ai/artifact/FHCyRNz6gerqBfwmTF8G38',
    tags: ['SSR Default', 'Learn the Throw Breaks', 'Respect Jaguar Sprint'],
    step: 'SSR',
    record: { w: 18, l: 16 },
    added: '2026-11-17'
  },
  {
    character: 'Panda',
    file: 'guides/Anti-Panda.html',
    artifact: 'https://claude.ai/artifact/VQGP9jidkSoVSrDSYocq59',
    tags: ['SSR Default', 'Heat Smash +9', 'Fast Mids vs HBS'],
    step: 'SSR',
    record: { w: 2, l: 2 },
    added: '2026-11-18'
  },
  {
    character: 'Steve',
    file: 'guides/Anti-Steve.html',
    artifact: 'https://claude.ai/artifact/WqkL2oqX2joUsWZQYHF3NQ',
    tags: ['SSR Close', 'Duck the Highs', 'Respect LNH +5'],
    step: 'SSR',
    record: { w: 21, l: 16 },
    added: '2026-11-19'
  },
  {
    character: 'Shaheen',
    file: 'guides/Anti-Shaheen.html',
    artifact: 'https://claude.ai/artifact/KMFTEjjKdLUwN2DSWDaXg7',
    tags: ['SSR Default, Block df1', 'Duck Al-Ghul & b3+4', 'Heat Smash -14 Low'],
    step: 'SSR',
    record: { w: 8, l: 13 },
    added: '2026-11-19'
  },
  {
    character: 'Fahkumram',
    file: 'guides/Anti-Fahkumram.html',
    artifact: 'https://claude.ai/artifact/CxhdaYxmARhD56Et5SzQgt',
    tags: ['SSR', 'Duck His Highs', 'Heat Smash +7'],
    step: 'SSR',
    record: { w: 19, l: 5 },
    added: '2026-11-19'
  },
  {
    character: 'Reina',
    file: 'guides/Anti-Reina.html',
    artifact: 'https://claude.ai/artifact/6rsmupTaUPqyeVoK5BUpF9',
    tags: ['Lean SSR, df1 SSL', 'Jab or Duck Empty SEN', 'Heat Smash +8'],
    step: 'SSR',
    record: { w: 11, l: 6 },
    added: '2026-11-17'
  },
  {
    character: 'Kazuya',
    file: 'guides/Anti-Kazuya.html',
    artifact: 'https://claude.ai/artifact/Xfsnc1CiuJ7rhcaSws1ZGs',
    tags: ['SSL Default', 'Block Hellsweep, ws1', 'Heat Smash -14 Low'],
    step: 'SSL',
    record: { w: 10, l: 10 },
    added: '2026-11-18'
  },
  {
    character: 'Jack-8',
    file: 'guides/Anti-Jack-8.html',
    artifact: 'https://claude.ai/artifact/Ki54CqJPNLhVvJMmve8SS9',
    tags: ['SSR vs His Strings', 'Gamma Howl Has No Lows', 'Heat Smash -9'],
    step: 'SSR',
    record: { w: 10, l: 4 },
    added: '2026-11-20'
  },
  {
    character: 'Kunimitsu',
    file: 'guides/Anti-Kunimitsu.html',
    artifact: 'https://claude.ai/artifact/RayyUSHj2AY4eDCihQERsy',
    tags: ['SSR Default', 'Launch Her Lows', 'Heat Smash +3'],
    step: 'SSR',
    record: { w: 8, l: 7 },
    added: '2026-11-21'
  },
  {
    character: 'Claudio',
    file: 'guides/Anti-Claudio.html',
    artifact: 'https://claude.ai/artifact/Udsf3honE3hNurDp92y4wA',
    tags: ['SSL Default', 'Watch Starburst', 'Heat Smash -14 Low'],
    step: 'SSL',
    record: { w: 4, l: 6 },
    added: '2026-11-22'
  },
  {
    character: 'Lars',
    file: 'guides/Anti-Lars.html',
    artifact: 'https://claude.ai/artifact/RJmTguGLMsnwy6YxD2DsGx',
    tags: ['SSR Default', 'Duck f,f,F+1 (+4)', 'Check His Stance Entries'],
    step: 'SSR',
    record: { w: 4, l: 5 },
    added: '2026-11-23'
  },
  {
    character: 'Asuka',
    file: 'guides/Anti-Asuka.html',
    artifact: 'https://claude.ai/artifact/2or5EBLTJpSHZRfxmhWMSm',
    tags: ['SSR Default', 'Duck f+1+2 Power Crush', 'Heat Smash +10'],
    step: 'SSR',
    record: { w: 7, l: 7 },
    added: '2026-11-23'
  },
  {
    character: 'Raven',
    file: 'guides/Anti-Raven.html',
    artifact: 'https://claude.ai/artifact/LzRv5GJyfFtEjMPBhvFx2e',
    tags: ['SSR Default', 'Punish Clones -13', 'Duck b+1 (+8)'],
    step: 'SSR',
    record: { w: 5, l: 4 },
    added: '2026-11-23'
    },
  {
    character: 'Lidia',
    file: 'guides/Anti-Lidia.html',
    artifact: 'https://claude.ai/artifact/GKG91L8mB9pKwWX9hWWhVa',
    tags: ['SSR Default', "Don't Jab +5 HRS", 'Duck f+3,4 (+5)'],
    step: 'SSR',
    record: { w: 9, l: 7 },
    added: '2026-11-24'
  },
  {
    character: 'Xiaoyu',
    file: 'guides/Anti-Xiaoyu.html',
    artifact: 'https://claude.ai/artifact/NT1KJ7PLZuZNqWbHxKdNYb',
    tags: ['SSL Default', 'Check With Mids', 'Duck f,F+4 (+9)'],
    step: 'SSL',
    record: { w: 12, l: 9 },
    added: '2026-11-24'
  },
  {
    character: 'Clive',
    file: 'guides/Anti-Clive.html',
    artifact: 'https://claude.ai/artifact/1ANMKyz8VFV4m8hPsafyMQ',
    tags: ['SSR Default', 'Block +6 PHX', 'Duck f+2,1 (+1)'],
    step: 'SSR',
    record: { w: 5, l: 3 },
    added: '2026-11-24'
  },
  {
    character: 'Feng',
    file: 'guides/Anti-Feng.html',
    artifact: 'https://claude.ai/artifact/8pdajjtvnuZg6F14ujHUWq',
    tags: ['SSL Default', 'Respect b+3 (+4)', 'Duck 1,2,2 (−13)'],
    step: 'SSL',
    record: { w: 7, l: 4 },
    added: '2026-11-25'
  }
];
