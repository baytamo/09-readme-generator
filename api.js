const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

const api = {
  async getUser(username) {
    console.log("axios works!");
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    try {
      // with this syntax, you don't have to do nested functions
      const { data } = await axios.get(queryUrl);

      // array of profile pic URLs
      const avatar = data.map((pic) => pic.owner.avatar_url);
      console.log(avatar[0]);
    } catch (e) {
      console.log(e);
    }
  },
};
module.exports = api;
