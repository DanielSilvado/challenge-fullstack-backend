function targetSearch(arr, target){
  const mapValues = {}
  for (let i = 0; i < arr.length; i++) {
    var num = arr[i];
    var dual = target - num

    if (mapValues.propertyIsEnumerable(dual)){
      return [mapValues[dual], i]
    }
    mapValues[num] = i
  }

  return "Valor não encontrado"
}
