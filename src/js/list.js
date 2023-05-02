class List {
  constructor() {
    this.localStorage = localStorage;
  }

  getLocalStorage = () => {
    const savedlistData = this.localStorage.getItem('lists-data');
    const data = savedlistData ? JSON.parse(savedlistData) : [];
    return data;
  };

  setLocalStorage = (data) => {
    this.localStorage.setItem('lists-data', JSON.stringify(data));
  };

  removeLocalStoragelistData = (index) => {
    const data = this.getLocalStorage().filter((e) => e.index !== index);
    return data;
  };

  addTaskToList = (listDetails) => {
    const data = this.getLocalStorage();
    listDetails.index = data.length + 1;
    data.push(listDetails);
    this.setLocalStorage(data);
    return listDetails;
  };

  removeTaskFromList = (index) => {
    const data = this.removeLocalStoragelistData(index);
    this.setLocalStorage(data);
  };
}

export default List;
