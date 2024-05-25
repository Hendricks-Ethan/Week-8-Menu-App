// This assignment is going to be used as a tool/record to organize types of animals someone would like to catalog.

// These are the 4 main classes for the assignment

class Bird {

    constructor(name, location, color, wingSpan) {
        this.name = name;
        this.location = location;
        this.color = color;
        this.wingSpan = wingSpan;
    }
}

class Mammal {

    constructor(name, location, color, legs) {
        this.name = name;
        this.location = location;
        this.color = color;
        this.legs = legs;
    }
}

class Fish {

    constructor(name, location, color, fins) {
        this.name = name;
        this.location = location;
        this.color = color;
        this.fins = fins;
    }
}

class Reptile {

    constructor(name, location, color, legs) {
        this.name = name;
        this.location = location;
        this.color = color;
        this.legs = legs;
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// This is the Menu class that I created to log that entered bojects and traverse through the prompts

class Menu {

    constructor() {
        this.birds = [];
        this.mammals = [];
        this.fish = [];
        this.reptiles = [];
    }

    // This is the main menu to the application

    startMainMenu() {
        let selection = this.showMainMenu();
        
        while (selection != 0) {
            switch(selection) {
                case '1':
                    this.startBirdMenu();
                    break;
                case '2':
                    this.startMammalMenu();
                    break;
                case '3':
                    this.startFishMenu();
                    break;
                case '4':
                    this.startReptileMenu();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenu();    
        }
        alert("Can't wait to see what kind of animals you find next!");
    }

    showMainMenu() {
        return prompt(`
            Choose a type of animal you would like to view, add, or delete:

            0 - Exit out of App
            1 - Bird
            2 - Mammal
            3 - Fish
            4 - Reptile
        `);
    }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// This is all the code used for the Bird class menu. and to add, delete, or view data in a Bird-classed object

    startBirdMenu() {
        let selection = this.showBirdMenu();

        while (selection != 0) {
            switch(selection) {
                case '1':
                    this.createBird();
                    break;
                case '2':
                    this.deleteBird();
                    break;
                case '3':
                    this.viewBird();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showBirdMenu();
        }
    }

    showBirdMenu() {
        return prompt(`
            What would like to do now?

            0 - Back to Main Menu
            1 - Add a Bird
            2 - Delete a Bird
            3 - View all Birds
        `);
    }

    addBird(bird) {
        if (bird instanceof Bird) {
            this.birds.push(bird);
        }
    }

    createBird() {
        let name = prompt('Enter the name of the bird you found: ');
        let location = prompt('Enter the location where you found the bird: ');
        let color = prompt('Enter the color of the bird you found: ');
        let wingSpan = prompt('Enter the the wingspan of the bird you found: ' +  '\n' +
            'Be sure to enter the dimensions like so: ' + '\n' +
            'e.g. 1 foot 3 inches.');
        this.addBird(new Bird(name, location, color, wingSpan));
    }

    deleteBird() {
        let i = prompt('Enter the bird that you would like to delete: ');
        if (i >= 0 && i < this.birds.length) {
            this.birds.splice(i,1);
        }
    }

    viewBird() {
        let birdString = '';

        for (let i = 0; i < this.birds.length; i++) {
            birdString += i + ') ' + this.birds[i].name + '\n' +
            '   This bird can be found in ' + this.birds[i].location + '.\n' +
            "   It's primary color is " + this.birds[i].color + '.\n' +
            "   It's wingspan is " + this.birds[i].wingSpan + '.\n';
        }


        alert(birdString);
    }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// This is all the code used for the Mammal class menu. and to add, delete, or view data in a Mammal-classed object

    startMammalMenu() {
        let selection = this.showMammalMenu();

        while (selection != 0) {
            switch(selection) {
                case '1':
                    this.createMammal();
                    break;
                case '2':
                    this.deleteMammal();
                    break;
                case '3':
                    this.viewMammal();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMammalMenu();
        }
    }

    showMammalMenu() {
        return prompt(`
            What would like to do now?

            0 - Back to Main Menu
            1 - Add a Mammal
            2 - Delete a Mammal
            3 - View all Mammals
        `);
    }

    addMammal(mammal) {
        if (mammal instanceof Mammal) {
            this.mammals.push(mammal);
        }
    }

    createMammal() {
        let name = prompt('Enter the name of the mammal you found: ');
        let location = prompt('Enter the location where you found the mammal: ');
        let color = prompt('Enter the color of the mammal you found: ');
        let legs = prompt('Enter the the number of legs the mammal has: ');
        this.addMammal(new Mammal(name, location, color, legs));
    }

    deleteMammal() {
        let i = prompt('Enter the mammal that you would like to delete: ');
        if (i >= 0 && i < this.mammals.length) {
            this.mammals.splice(i,1);
        }
    }

    viewMammal() {
        let mammalString = '';

        for (let i = 0; i < this.mammals.length; i++) {
            mammalString += i + ') ' + this.mammals[i].name + '\n' +
            '   This mammal can be found in ' + this.mammals[i].location + '.\n' +
            "   It's primary color is " + this.mammals[i].color + '.\n' +
            "   It has " + this.mammals[i].legs + ' legs.\n';
        }


        alert(mammalString);
    }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// This is all the code used for the Fish class menu. and to add, delete, or view data in a Fish-classed object

    startFishMenu() {
        let selection = this.showFishMenu();

        while (selection != 0) {
            switch(selection) {
                case '1':
                    this.createFish();
                    break;
                case '2':
                    this.deleteFish();
                    break;
                case '3':
                    this.viewFish();
                    break;
                default:
                    selection = 0
            }
            selection = this.showFishMenu();
        }
    }

    showFishMenu() {
        return prompt(`
            What would like to do now?

            0 - Back to Main Menu
            1 - Add a Fish
            2 - Delete a Fish
            3 - View all Fish
        `);
    }

    addFish(fish) {
        if (fish instanceof Fish) {
            this.fish.push(fish);
        }
    }

    createFish() {
        let name = prompt('Enter the name of the fish you found: ');
        let location = prompt('Enter the location where you found the fish: ');
        let color = prompt('Enter the color of the fish you found: ');
        let fins = prompt('Enter the the number of fins the fish has: ');
        this.addFish(new Fish(name, location, color, fins));
    }

    deleteFish() {
        let i = prompt('Enter the fish that you would like to delete: ');
        if (i >= 0 && i < this.fish.length) {
            this.fish.splice(i,1);
        }
    }

    viewFish() {
        let fishString = '';

        for (let i = 0; i < this.fish.length; i++) {
            fishString += i + ') ' + this.fish[i].name + '\n' +
            '   This fish can be found in ' + this.fish[i].location + '.\n' +
            "   It's primary color is " + this.fish[i].color + '.\n' +
            "   It has " + this.fish[i].fins + ' fins.\n';
        }


        alert(fishString);
    }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// This is all the code used for the Reptile class menu. and to add, delete, or view data in a Reptile-classed object

    startReptileMenu() {
        let selection = this.showReptileMenu();

        while (selection != 0) {
            switch(selection) {
                case '1':
                    this.createReptile();
                    break;
                case '2':
                    this.deleteReptile();
                    break;
                case '3':
                    this.viewReptile();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showReptileMenu();
        }
    }

    showReptileMenu() {
        return prompt(`
            What would like to do now?

            0 - Back to Main Menu
            1 - Add a Reptile
            2 - Delete a Reptile
            3 - View all Reptiles
        `);
    }

    addReptile(reptile) {
        if (reptile instanceof Reptile) {
            this.reptiles.push(reptile);
        }
    }

    createReptile() {
        let name = prompt('Enter the name of the reptile you found: ');
        let location = prompt('Enter the location where you found the reptile: ');
        let color = prompt('Enter the color of the reptile you found: ');
        let legs = prompt('Enter the the number of legs the reptile has: ');
        this.addReptile(new Reptile(name, location, color, legs));
    }

    deleteReptile() {
        let i = prompt('Enter the reptile that you would like to delete: ');
        if (i >= 0 && i < this.reptiles.length) {
            this.reptiles.splice(i,1);
        }
    }

    viewReptile() {
        let reptileString = '';

        for (let i = 0; i < this.reptiles.length; i++) {
            reptileString += i + ') ' + this.reptiles[i].name + '\n' +
            '   This reptile can be found in ' + this.reptiles[i].location + '.\n' +
            "   It's primary color is " + this.reptiles[i].color + '.\n' +
            "   It has " + this.reptiles[i].legs + ' legs.\n';
        }


        alert(reptileString);
    }
}

let menu = new Menu();
menu.startMainMenu();