import Database from './DataBase'

let filteredDatabase = Database
const setFilteredDataBase = (category) => {
    filteredDatabase = Database.filter(item => item.categoria === category);

}
const ResetFilteredDataBase = () => {
    filteredDatabase = Database
}

export {setFilteredDataBase,ResetFilteredDataBase,filteredDatabase};