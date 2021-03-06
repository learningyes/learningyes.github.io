var sketchProc = function(processingInstance) {
     with (processingInstance) {
        size(400, 400); 
        frameRate(30);
        
        // ProgramCodeGoesHere
	
	     // buttons
var Button = function(x, y, pressed) {
    this.x = x;
    this.y = y;
    this.pressed = pressed;
};
Button.prototype.draw = function(redness) {
    stroke(redness, 0, 0);
	if(this.pressed) {
        fill(74, 95, 179);
    } else {
        fill(255, 255, 255);
    }
    strokeWeight(2);
    ellipse(this.x, this.y, 40, 40);
};
Button.prototype.isUnderMouse = function(x, y) {
    return (sq(x - this.x) + sq(y - this.y)) < sq(20);
};
var Resultbutton = function(x, y, pressed) {
    this.x = x;
    this.y = y;
    this.pressed = pressed;
};
Resultbutton.prototype.draw = function() {
    stroke(0, 0, 0);
    if(this.pressed) {
        fill(74, 95, 179);
    } else {
        fill(255, 255, 255);
    }
    strokeWeight(2);
    rect(this.x, this.y, 40, 40, 10);
};
var COLUMN_HEIGHT = 5;
var NUMBER_COLUMNS = 2;
var buttons = [];
var resultbuttons = [];
angleMode = "degrees";
for(var j=0; j < NUMBER_COLUMNS; j++) {
    for(var i=0; i < COLUMN_HEIGHT; i++) {
        buttons.push(new Button(50 + j * 100, 150 + i * 50, false));
        resultbuttons.push(new Resultbutton(240 + j * 50, 330 - i * 50, false));
    }
}
var sum = 0;
mouseClicked = function() {
    sum = 0;
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].isUnderMouse(mouseX, mouseY)) {
            if (buttons[i].pressed) {
                buttons[i].pressed = false;
            } else {
                buttons[i].pressed = true;
            }
        }
        // Counting pressed buttons
        if(buttons[i].pressed) {
            sum++;
        }
        
    }
};
draw = function() {
    background(255, 255, 255);
    
    // 
    for(var i=0; i < resultbuttons.length; i++) {
        resultbuttons[i].pressed = false;
    }
    
    // Colouring of resultbuttons
    for(var i=0; i < sum; i++) {
        resultbuttons[i].pressed = true;
    }
    
    // Draw all buttons
    for(var i=0; i < buttons.length; i++) {
        buttons[i].draw(floor(128 + 127 * sin(frameCount%3600 / 10)));
        resultbuttons[i].draw();
    }
    
    fill(0, 0, 0);
    textSize(50);
    text(sum, 270, 100);
    text("+", 87, 270);
    text("=", 187, 270);
};
	     
        
    }};
    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("mycanvas"); 
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processingInstance = new Processing(canvas, sketchProc);
