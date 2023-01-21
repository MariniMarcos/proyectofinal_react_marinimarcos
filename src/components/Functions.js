import Database from './DataBase'

let filteredDatabase = Database
const setFilteredDataBase = (category) => {
    filteredDatabase = Database.filter(item => item.categoria === category);

}
const setFilteredDataBase2 = (id) => {
    filteredDatabase = Database.filter(item => item.id === id);
}
const ResetFilteredDataBase = () => {
    filteredDatabase = Database
}

export {setFilteredDataBase,setFilteredDataBase2,ResetFilteredDataBase,filteredDatabase};