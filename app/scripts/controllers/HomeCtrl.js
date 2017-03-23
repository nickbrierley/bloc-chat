(function() {
    function HomeCtrl(Room, Message) {
        this.rooms = Room.all;
        this.currentRoom = null;


        this.addRoom = function() {
            Room.add(this.newRoom);
            this.newRoom = null;
            };

        this.setCurrentRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
        }
    }

    angular 
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();