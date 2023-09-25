import importedData from './data.js';
const allFoodItems = (data) => { 
    return data.map(item => item.foodname)
}
console.log(allFoodItems(importedData)); 

const allFoodItemsCategoryVegetable = (data) => {
    return data
        .filter(item => item.category === 'Vegetable') 
        .map(item => item.foodname); 
}
console.log(allFoodItemsCategoryVegetable(importedData));

const allFoodItemsCategoryFruit = (data) => {
    return data
        .filter(item => item.category === 'Fruit') 
        .map(item => item.foodname); 
}
console.log(allFoodItemsCategoryFruit(importedData));


const allFoodItemsCategoryProtein = (data) => {
    return data
        .filter(item => item.category === 'Protein') 
        .map(item => item.foodname); 
}
console.log(allFoodItemsCategoryProtein(importedData));


const allFoodItemsCategoryNut = (data) => {
    return data
        .filter(item => item.category === 'Nut') 
        .map(item => item.foodname); 
}
console.log(allFoodItemsCategoryNut(importedData));


const allFoodItemsCategoryGrain = (data) => {
    return data
        .filter(item => item.category === 'Grain') 
        .map(item => item.foodname); 
}
console.log(allFoodItemsCategoryGrain(importedData));

const allFoodItemsCategoryDairy = (data) => {
    return data
        .filter(item => item.category === 'Dairy') 
        .map(item => item.foodname); 
}
console.log(allFoodItemsCategoryDairy(importedData));


const allFoodItemWithlowCalorie = (data) => { 
    return data
    .filter(item => item.calorie < 100)
    .map(item => item.foodname)
}
console.log(allFoodItemWithlowCalorie(importedData)); 

const allFoodItemWithHighCalorie = (data) => { 
    return data
    .filter(item => item.calorie > 100)
    .map(item => item.foodname)
}
console.log(allFoodItemWithHighCalorie(importedData)); 

// const allFoodItemSortedHighToLow = (data) => { 
//     return data
//     .filter(item => item.calorie > 100)
//     .map(item => item.foodname)
// }
// console.log(allFoodItemWithHighCalorie(importedData));



const sortByProtienContent = importedData.sort((a,b)=>{
    return (b.protiens - a.protiens);
});
console.log(sortByProtienContent);

const sortByCabContent = importedData.sort((a,b)=>{
    return (a.protiens - b.protiens);
});
console.log(sortByCabContent);

