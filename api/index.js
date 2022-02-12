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

export const getSkins = (uuid, callback) => {
  fetch(`https://valorant-api.com/v1/weapons/${uuid}`)
    .then((res) => {
      // console.log(res);

      if (res.status === 200) {
        return res.json();
      }
    })
    .then((res) => {
      callback(res.data.skins);
    });
};

export const getGameModes = (callback) => {
  fetch(`${url}/gamemodes`)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((res) => callback(res.data));
};

export const getBundles = (callback) => {
  fetch(`${url}/bundles`)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((res) => callback(res.data));
};
