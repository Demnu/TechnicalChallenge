// a function that takes an array of spore IDs and returns the number of pairs of spores
const pairSpores = (sporeIds: Array<number>) : number=>{

    // Create a Map to keep track of how many spores with each ID have been encountered
    let sporeMap = new Map <number,number>();

    // Initialize a counter for the number of spore pairs
    let numOfPairs: number = 0;

    // Loop through the array of spore IDs
    for (let i : number = 0; i <sporeIds.length; i++){
        let sporeId: number = sporeIds[i];

        // If the current spore ID has been encountered before, increment its count in the Map
        if (sporeMap.has(sporeId)){
            sporeMap.set(sporeId,sporeMap.get(sporeId)!+1);
        }
        // Otherwise, add it to the Map with a count of 1
        else{
            sporeMap.set(sporeIds[i],1)
        }
    }
    // Loop through the Map of spore counts
    sporeMap.forEach(spore =>{
        // For each spore ID, add the number of pairs of spores with that ID to the counter
        numOfPairs += Math.floor(spore/2)
    })
    return numOfPairs;
}
export default pairSpores;