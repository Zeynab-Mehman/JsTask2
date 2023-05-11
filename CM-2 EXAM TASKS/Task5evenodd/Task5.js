// 5. Show the count of the both odd and even numbers from array.
// let numbers = [1,4,7,8,3,5,0,2,4,6,12,15,18,46,45,48,97,84]

// For example, countEvensAndOdds(numbers);   // evens: 12, odds: 13



const countEvensAndOdds= (numbers)=> {
   const evennums = numbers.filter((user)=>user%2===0 && user !== 0)
   const oddnums = numbers.filter((user)=>user%2 !==0)
   console.log(`evennums${evennums.length} oddnums${oddnums.length}`)
}
countEvensAndOdds([1,4,7,8,3,5,0,2,4,6,12,15,18,46,45,48,97,84])