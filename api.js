const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const init = require("./index.js");

const api = async function getUser() {
  console.log(username);
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=100`
    );
    let avatar = data.map((data) => data.owner.avatar_url)[0];
    console.log(avatar);
    let bioImage = `![GitHub bio image](${avatar})`;

    fs.appendFile("newREADME.md", bioImage, (err) => {
      if (err) throw err;
      console.log("bio image added to readme file");
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = api;