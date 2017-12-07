import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'submit form': function(event){ 
    event.preventDefault(); 
    var address = event.target.address.value;
    var bitcoin = event.target.bitcoin.value;

    var params = {
      address : address,
      bitcoin : bitcoin
    }
    console.log("address: " + address);
    console.log("bitcoin: " + bitcoin);

    Meteor.call("addTask", params);

   }
});
