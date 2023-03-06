import ShiaDefaultData from '../Assets/ShiaDefaultData.json';

export default class DatabaseManager {
  static getDemoItems() {
    return  ShiaDefaultData.map(item => item["inventory"]);
  }
  getItems(){
    return DatabaseManager.getDemoItems()
  }
  addItems(){}
  updateItems(){}
  deleteItems(){}
}