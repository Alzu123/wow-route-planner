export const CsvToJson = ( csvFile, delimiter ) => {

  let lines = csvFile.split("\n")
  let result = []

  for(let i = 3; i < lines.length; i++){
    var data = lines[i].split(delimiter)

	  var obj = {
      name: data[0].trim(),
      note: data[1],
      origin: {
        coordinates: {x: parseFloat(data[2]), y: parseFloat(data[3])},
        continent: data[4],
        description: data[5],
      },
      destination: {
        coordinates: {x: parseFloat(data[6]), y: parseFloat(data[7])},
        continent: data[8],
        description: data[9],
      },
      fromPlayer: data[10] === "TRUE",
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

    result.push(obj)
  }
  
  const unquotedResultAsString = JSON.stringify(result, null, 2).replace(/"([^"]+)":/g, '$1:');
  return unquotedResultAsString
  
}

export default CsvToJson