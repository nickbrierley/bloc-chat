(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
        this.addRoom = function() {
            this.submit = function () {
                Room.add(this.newRoom);
            };
        }
    }
       
    angular 
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();