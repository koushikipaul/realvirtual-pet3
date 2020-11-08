class Food {
    constructor() {

        this.image = loadImage("images/Milk.png");
        World.add(world, this.image);
    }
    display() {

        var x = 80, y = 100;

        imageMode(CENTER);
        // image(this.image, x, y, 50, 50);

        if (foodx !== 0) {

            for (var i = 0; i < foodx; i++) {


                if (i % 10 == 0) {

                    x = 80;
                    y = y + 50;

                }
                x += 30;
                image(this.image, x, y, 50, 50);

            }
        }
    }

    getFoodStock() {
        return foodx;
    }

    updateFoodStock(foodStock) {
        foodx = foodx;
    }

    deductFood() {
        if (foodx > 0) {
            foodx = foodx - 1;
        }
    }


}
        