//if (Meteor.isClient) {
//  // counter starts at 0
//  Session.setDefault('counter', 0);
//
//  Template.hello.helpers({
//    counter: function () {
//      return Session.get('counter');
//    }
//  });
//
//  Template.hello.events({
//    'click button': function () {
//      // increment the counter when button is clicked
//      Session.set('counter', Session.get('counter') + 1);
//    }
//  });
//}
//
//if (Meteor.isServer) {
//  Meteor.startup(function () {
//    // code to run on server at startup
//  });
//}s

Template.main.helpers({
  zone : function() {
    var zones = Zones.find().fetch();
    console.log("in helpers: ", zones.length);
    for(var i = 0; i < zones.length; i++) {
      console.log("zones: ", zones[i]);
    }
    return Zones.find();
  }
})