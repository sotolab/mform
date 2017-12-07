import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});


Meteor.methods({
  addTask: function (params) {
    console.log("good: " + params.address);
    console.log("good: " + params.bitcoin);

  },
});