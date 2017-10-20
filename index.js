function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {

    blockDifference = Math.abs(parseInt(startBlock) - parseInt(endBlock))
    rangeDifference = blockDifference - blockRange

    if (rangeDifference > 0) {
      return `${Math.abs(rangeDifference)} blocks out of range`
    } else {
      return `within range by ${Math.abs(rangeDifference)}`
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function(fare) {
    return tipPercent * fare
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
