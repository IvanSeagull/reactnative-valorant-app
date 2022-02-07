const url = 'https://valorant-api.com/v1';
export default url;

export const getAgents = (callback) => {
  fetch('https://valorant-api.com/v1/agents')
    .then((res) => {
      // console.log(res);

      if (res.status === 200) {
        return res.json();
      }
    })
    .then((res) => callback(res.data));
};

export const getMaps = (callback) => {
  fetch('https://valorant-api.com/v1/maps')
    .then((res) => {
      // console.log(res);

      if (res.status === 200) {
        return res.json();
      }
    })
    .then((res) => callback(res.data));
};

export const getWeapons = (callback) => {
  fetch('https://valorant-api.com/v1/weapons')
    .then((res) => {
      // console.log(res);

      if (res.status === 200) {
        return res.json();
      }
    })
    .then((res) => callback(res.data));
};
