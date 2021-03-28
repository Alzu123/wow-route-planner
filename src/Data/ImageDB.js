const preImages = [
  {name: 'Kalimdor', file: require('./Images/Kalimdor.jpg')},
  {name: 'Eastern Kingdoms', file: require('./Images/Eastern Kingdoms.jpg')},
  {name: 'Outland', file: require('./Images/Outland.jpg')},
  {name: 'Northrend', file: require('./Images/Northrend.jpg')},
  {name: 'Pandaria', file: require('./Images/Pandaria.jpg')},
  {name: 'Draenor', file: require('./Images/Draenor.jpg')},
  {name: 'Broken Isles', file: require('./Images/Broken Isles.jpg')},
  {name: 'Zandalar', file: require('./Images/Zandalar.jpg')},
  {name: 'Kul Tiras', file: require('./Images/Kul Tiras.jpg')},
  {name: 'Shadowlands', file: require('./Images/Shadowlands.jpg')},
]

export const Images = preImages.map((image, i) => ({...image, id: i}))