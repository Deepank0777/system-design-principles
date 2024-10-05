/**
 * Interface segmenatation, Clients should not implement the
 * un-necessary functions that they do not need
 * 
 * try to break interface in a small possible units
 * so they never become a bottle neck for implemented class
 */

interface HotelEmployee {
    takeOrder(): void;
    prepareFood(): void;
    cleanDishes(): void;
}

class WaiterWrong implements HotelEmployee{

    takeOrder(): void {
        //do something
    }
    prepareFood(): void {
        //I don't do this
    }
    cleanDishes(): void {
        //I don't do this
    }
}

/**
 * Above design is a BAD because Waiter class has to write the functions
 * that they don't even need
 */

/**
 * As a solution let's write such interfaces that don't force
 * classes to write un-necessary functions
 */

interface CheffStaff{
    prepareFood():void
    decideMenu():void
}
interface WaiterStaff{
    takeOrders():void
}
interface HelperStaff{
    cleanDishes():void
}

class Cheff implements CheffStaff{
    prepareFood(): void {
        //do something
    }
    decideMenu(): void {
        //do something
    }
}

class Waiter implements WaiterStaff, HelperStaff{
    takeOrders(): void {
        //so something
    }
    cleanDishes(): void {
        //do something
    }
}