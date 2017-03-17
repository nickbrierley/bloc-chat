(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
        this.addRoom = function() {
                Room.add(this.newRoom);
                this.newRoom = null;
            };
    }
       
    angular 
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();