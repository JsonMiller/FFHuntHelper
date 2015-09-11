Meteor.publish("zones", function() {
    console.log("publishing zones: ", Zones.find().fetch().length);
    return Zones.find();
});