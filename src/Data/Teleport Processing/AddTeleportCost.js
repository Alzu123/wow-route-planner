const AddTeleportCost = (teleports, loadingScreenParams) => {
  const timeInLoadingScreens = 15 // In seconds
  const loadingScreenAnnoyance = 5 // Variable for estimating how much being stuck in a loading screen annoys you

  teleports = teleports.map(function(teleport, i) {
    let totalCost = teleport.numLoadingScreens * (timeInLoadingScreens + loadingScreenAnnoyance)
    totalCost += teleport.castTime
    totalCost += teleport.travelTime
    return ({...teleport, cost: totalCost})
  })

  return teleports
}

export default AddTeleportCost