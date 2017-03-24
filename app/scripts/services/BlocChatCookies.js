(function() {
    function BlocChatCookies($cookies) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
           console.log("ho")
        } else {
            console.log("hello")
            this.username == true;
        }
    }
    
    angular 
        .module('blocChat')
        .run(['$cookies', BlocChatCookies]);
})();