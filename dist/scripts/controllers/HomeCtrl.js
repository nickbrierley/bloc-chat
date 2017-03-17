(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
        this.addRoom = function() {
                Room.add(this.newRoom);
            };
    }
       
    angular 
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();