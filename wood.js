function woodQuantity(chair,table,bed){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairTotalWood = chair * perChairWood;
    const tableTotalWood = table * perTableWood;
    const bedTotalWood = bed* perBedWood;
    const totalWood = chairTotalWood+bedTotalWood+tableTotalWood;
    return totalWood;
}
const wood = woodQuantity(8,0,1);
console.log('wood needed"',wood);