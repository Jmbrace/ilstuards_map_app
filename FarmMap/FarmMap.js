if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    farmPins = new Mongo.Collection('farmPins');


    // This line won't complete until the insert is done
    farmPins.insert({id: 'Farm1'});
    farmPins.insert({lat: 42.114525});
    farmPins.insert({lng: -88.036537});
    farmPins.insert({title: 'Test Farm'});
  });
}
