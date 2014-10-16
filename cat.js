var cat = {
        tiredness: 20,
        hunger: 20,
        loneliness: 3,
        happiness: 15,
        obedientness: -5000,
        feed: function(food){
            if (food === 'salmon'){
            console.log("Om nom nom");
            this.hunger = this.hunger - 5;
            this.obedientness += 500;
        }else if (food === 'meow mix'){
            console.log("meow meow meow meow");
            this.hunger = this.hunger - 10;
            this.obedientness += 700;
        }
        else{
           console.log("whatever");
            this.hunger = this.hunger - 1;
            this.obedientness += 10; 
        }
        },
        sleep: function(amount){
            console.log("zzzzzzzzz");
            this.tiredness = this.tiredness - amount;
        },
        pet: function(action){
            if (action = "pet"){
                if (Math.random() > 0.5){
                   console.log("purr!!!!!");
                   this.happiness = this.happineness + 5;
                   this.loneliness = this.loneliness -1;
                   this.tiredness += 2; 
                } else {
                   console.log("growl!!");
                   this.happiness = this.happineness - 5;
                   this.loneliness = this.loneliness -1;
                   this.tiredness += 2; 
                }
                
            }
            else if (action == 'laser') {
                console.log("woo hoo!!!!!");
                this.happiness = this.happineness + 10;
                this.loneliness = this.loneliness -5;
                this.tiredness += 15;
            }else{
                 console.log("nothing.....");   
            }
        },
        spray: function(){
            console.log("hissss!!!!");
            this.happiness = this.happineness - 10;
            this.obedientness -= 500;
        },
        status: function(){
            console.log("Tiredness:", this.tiredness);
            console.log("Hunger: ", this.hunger);
            console.log("Loneliness: ", this.loneliness);
            console.log("Happiness: ", this.happiness);
            console.log("obedientness: ", this.obedientness);
        }
}; 