(function() {
    function HomeCtrl(Room, Message, $cookies) {
        this.rooms = Room.all;
        this.currentRoom = null;
        this.show = false;

        this.addRoom = function() {
            Room.add(this.newRoom);
            this.newRoom = null;
            };

        this.setCurrentRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
        }
        
        this.setUsername = function() {
            $cookies.put('blocChatCurrentUser', this.username);
            this.show = true;
            this.username = null;
        }
    }

    angular 
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();