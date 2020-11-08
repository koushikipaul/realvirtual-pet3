class Dog {
    constructor(x, y) {

        var opt = {
            isStatic: true
        }


        this.body = Bodies.rectangle(x, y, 5, 5, opt);

        this.image = loadImage("images/dogImg.png");
        this.image2 = loadImage("images/dogImg1.png");
        this.image3 = loadImage("images/Garden.png");
        this.image4 = loadImage("images/Bed Room.png");
        this.image5 = loadImage("images/Wash Room.png");


        World.add(world, this.body);
    }
    display() {
        var state = "on";

        var pos = this.body.position;
        // rectMode(CENTER);
        imageMode(CENTER);

        if (state != "off" && foodx > 0) {
            image(this.image, pos.x, pos.y, 200, 200);

        }

        if (foodx <= 0) {
            image(this.image2, pos.x, pos.y, 200, 200);
            state = "off";
        }
    }
    keyPressed() {
        var pos = this.body.position;

        if (keyDown(UP_ARROW)) {
            move(0, -10);
        }

        if (keyDown(DOWN_ARROW)) {
            move(0, 10);
        }

        if (keyDown(LEFT_ARROW)) {
            move(-10, 0);
        }

        if (keyDown(RIGHT_ARROW)) {
            move(10, 0);

        }

        if (keyDown("space")) {
            // writeData(food);

        }

    }

    garden() {
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image3, pos.x, pos.y, width, height);

    }

    bedroom() {
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image4, pos.x, pos.y, width, height);


    }

    washroom() {
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image5, pos.x, pos.y, width, height);


    }


}
