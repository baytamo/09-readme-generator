const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

const api = {
  getUser(username) {

  }
};

module.exports = api;

// taken from in-class activity
inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username",
  })
  .then(async ({ username }) => {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    try {
      // with this syntax, you don't have to do nested functions
      const { data } = await axios.get(queryUrl);
      // await will keep calling .then until it resolves with a value
      // if this fails, it will try catch
      // data is an array of objects!!!
      console.log(data);

      // get repo names
      const repoNames = data.map(repo => repo.name).join('\n');

      //get profile picture
      const avatar = data.map(pic => pic.owner.avatar_url).join('\n');

      // // get description if user has filled this section out
      // const description = data.map(description => description.description).join('\n');
      // console.log(description);

      fs.writeFile('repos.txt', repoNames, err => {
        if (err) throw err;
        console.log('successfully created txt file');
      })
    } catch (e) {
      console.log(e);
    }
  });
