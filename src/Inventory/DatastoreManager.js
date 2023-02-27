import ShiaDefaultData from './../ShiaDefaultData.json';

export default class DatastoreManager {
  getDemoItems() {
    return  ShiaDefaultData.map(item => item["inventory"]);
  }
  getItems(){}
  addItems(){}
  updateItems(){}
  deleteItems(){}
}