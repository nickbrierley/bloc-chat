(function() {
    function HomeCtrl(Room, Message, $cookies) {
        this.rooms = Room.all;
        this.currentRoom = null;
        this.currentUser = $cookies.get('blocChatCurrentUser');
        
        this.addRoom = function() {
            Room.add(this.newRoom);
            this.newRoom = null;
            }

        this.setCurrentRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
        }
        
        this.setUsername = function() {
            $cookies.put('blocChatCurrentUser', this.username);
            this.username = null; 
            this.currentUser = $cookies.get('blocChatCurrentUser');
        }
        
        this.content = function() {
            this.newMessage.username = this.currentUser;
            this.newMessage.roomId = this.currentRoom.$id;
            Message.send(this.newMessage);
            this.newMessage = null;
        }
    }

    angular 
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();