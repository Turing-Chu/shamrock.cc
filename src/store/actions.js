// root actions
import axios from 'axios';

const actions = {
  loadTypes() {
    return new Promise((resolve, reject) => {
      axios.get('/api/v1/websites').then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  loadWebsites(context, params) {
    return new Promise((resolve, reject) => {
      const url = `/api/v1/websites/${params.item}`;
      axios.get(url).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  addWebsite(context, params) {
    console.log(params);
    return new Promise((resolve, reject) => {
      const url = `/api/v1/websites/${params.name}/`;
      axios.post(url).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  addWebWeight(params) {
    return new Promise((resolve, reject) => {
      const url = `/api/v1/websites/${params.item}`;
      axios.get(url).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  addTypeWeight(context, params) {
    return new Promise((resolve, reject) => {
      const url = `/api/v1/websites?type=${params.name}`;
      axios.put(url).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  },
};

export default actions;
