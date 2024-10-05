/**
 * Liskov Principle of subsitution
 * 
 * If B is a subclass of A then we should be able to replace the  
 * object of A with B without breaking the functionality of the code
 * 
 * SubClass should extend the functionality of parent insted narrowing it down
 */

interface Bike{
    startEngine(): void;
    accelerate(): void;
}

class MotorBikeW implements Bike{

    isEngineOn: boolean;
    speed: number

    startEngine():void{
        this.isEngineOn = true
        //start engine
    }

    accelerate(): void {
        //increase speed
        this.speed++;
    }
}

class BicycleW implements Bike{
    
    //this function voilates the Liskov principle because we can't replace
    //object of Motocycle with Bicycle since startEngine() trows exception
    //and any class using the Motocycle object might break
    startEngine(): void {
        throw new Error('engine can not be started');    
    }

    accelerate(): void {
        //do something
    }
}

class Vehical{
    hasEngine():boolean{
        return true;
    }

    numberOfTyres():number{
        return 2
    }
}

class MotorBike extends Vehical{

}

class Bicycle extends Vehical{
    
    hasEngine():boolean{
        return false;
    }
}

class Car extends Vehical{
    
    airbags():number{
        return 4;
    }
}

const typeOfVehical:Vehical[] = [new MotorBike(), new Bicycle]
for(const obj of typeOfVehical){
    console.log(obj.hasEngine().toString())
}