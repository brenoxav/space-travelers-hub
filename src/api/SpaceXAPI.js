class SpaceXAPI {
  constructor() {
    this.BASE_URL = 'https://api.spacexdata.com/v3/';
  }

  async callApi(endpoint) {
    const response = await fetch(`${this.BASE_URL}${endpoint}`);
    return response.json();
  }

  getRockets() {
    return this.callApi('rockets');
  }

  getMissions() {
    return this.callApi('missions');
  }
}

const api = new SpaceXAPI();

export default api;
