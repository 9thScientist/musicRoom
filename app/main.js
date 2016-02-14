System.register(['angular2/platform/browser', './components/users.component', './components/songs.component'], function(exports_1) {
    var browser_1, users_component_1, songs_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (songs_component_1_1) {
                songs_component_1 = songs_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(songs_component_1.AppComponent);
            browser_1.bootstrap(users_component_1.UsersComponent);
        }
    }
});
//# sourceMappingURL=main.js.map