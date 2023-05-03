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

  getTaskByIndex = (id) => {
    const data = this.getLocalStorage().filter((e) => e.index === Number(id));
    return data;
  };

  UpdateCompleteTask = (index) => {
    const data = this.getLocalStorage();
    data.forEach((e) => {
      if (e.index === index) {
        e.completed = true;
      }
    });
    this.setLocalStorage(data);
  };

  UpdateUnCompleteTask = (index) => {
    const data = this.getLocalStorage();
    data.forEach((e) => {
      if (e.index === index) {
        e.completed = false;
      }
    });
    this.setLocalStorage(data);
  };

  UpdateDescriptionTask = (index, value) => {
    const data = this.getLocalStorage();
    data.forEach((e) => {
      if (e.index === index) {
        e.description = value;
      }
    });
    this.setLocalStorage(data);
  };

  removeLocalStoragelistData = (index) => {
    const data = this.getLocalStorage().filter((e) => e.index !== index);
    data.forEach((e, i) => {
      e.index = i + 1;
    });
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
    return data;
  };
}

export default List;
