function searchWater(arr){
    let tam = arr.length
    let water = 0
    
    for (let i = 1; i < tam - 1; i++) {

        let left_max = arr[i];        
        for (let j = 0; j < i; j++) {
            left_max = Math.max(left_max, arr[j]);         
        }

        let right_max = arr[i];
        for (let j = i+1; j < tam; j++) {
            right_max = Math.max(right_max, arr[j])            
        }

        water = water + (Math.min(left_max, right_max) - arr[i])
    }
    return water
}