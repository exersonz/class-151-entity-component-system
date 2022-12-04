//to write a custom component use this:
AFRAME.registerComponent('move-box', {
    schema: {
        moveY: {type: "number", default: 1}
    },
    tick: function(){
        this.data.moveY = this.data.moveY + 0.01;
        //it gets you the current value of position attribute
        var position = this.el.getAttribute("position"); 
        position.y = this.data.moveY;
        //it sets the updated value to the position attribute
        this.el.setAttribute("position", {x: position.x, y: position.y, z: position.z});
    }
});