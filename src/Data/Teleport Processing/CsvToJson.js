import continents from '../ContinentDB'
import Continent from '../Continent'
import Point from '../Point'

const CsvToJson = ( csvFile, delimiter ) => {

  let lines = csvFile.split("\n")
  let result = []

  for(let i = 3; i < lines.length; i++){
    const data = lines[i].split(delimiter)

    const emptyContinent = new Continent(null, null, null, null, null, null)
    let originContinent = data[4] ? continents[data[4].replaceAll(' ', '_').replaceAll('\'', '').toUpperCase()] : emptyContinent
    let destinationContinent = data[8] ? continents[data[8].replaceAll(' ', '_').replaceAll('\'', '').toUpperCase()] : emptyContinent

    originContinent = originContinent ? originContinent : emptyContinent
    destinationContinent = destinationContinent ? destinationContinent : emptyContinent


	  let obj = {
      name: data[0].trim(),
      note: data[1],
      origin: {
        position: new Point(parseFloat(data[2]), parseFloat(data[3]), originContinent),
        description: data[5],
      },
      destination: {
        position: new Point(parseFloat(data[6]), parseFloat(data[7]), destinationContinent),
        description: data[9],
      },
      fromPlayer: data[5] === "Player",
      type: data[11],
      enabled: data[12] === "TRUE",
      cooldown: parseFloat(data[13]),
      restrictions: {
        faction: data[14],
        class: data[15],
        race: data[16],
        covenant: data[17],
        profession: data[18],
      },
      verified: data[19] === "TRUE",
      numLoadingScreens: data[20] ? parseFloat(data[20]) : 0,
      castTime: data[21] ? parseFloat(data[21]) : 0,
      travelTime: data[22] ? parseFloat(data[22]) : 0,
    }
    if (obj.name === "Dazar'alor Portal Room") {
      console.log(originContinent)
    }

    result.push(obj)
  }
  
  const unquotedResultAsString = JSON.stringify(result, null, 2).replace(/"([^"]+)":/g, '$1:');
  return unquotedResultAsString
  
}

export default CsvToJson