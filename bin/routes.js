Router.route('/', function() {
    console.log("hit route");
    this.subscribe("zones");
    if(this.ready()) {
        this.render("main");
    }
})