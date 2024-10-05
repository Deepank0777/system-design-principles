//S = Single Responsibility Principle
//->->-> A class should have only one reason to change <-<-<-

export class Printer{
    model_number:string;
    price:number;
    color:string;

    constructor(model_number: string, price: number, color: string){
        this.model_number = model_number;
        this.price = price;
        this.color = color;
    }

}

//wrong implementation
export class InvoiceW{
    private printer:Printer;
    private quantity: number;

    constructor(printer: Printer, quantity: number){
        this.printer = printer;
        this.quantity = quantity;
    }

    public totalAmount():number{
        return this.printer.price * this.quantity;
        // return price
    }

    public print():void{
        //print pdf of invoice
    }

    public saveInvoice():void{
        //save invoice in db
    }
}
// const pr = new Printer('hp', 1200, 'black');
// const inv = new InvoiceW(pr, 10);
// console.log(inv.totalAmount())

//correct implementation

export class Invoice{

    public printer: Printer
    public quantity: number

    constructor(printer: Printer, quantity: number){
        this.printer = printer;
        this.quantity = quantity;
    }
}


class CalculateInvoicePrice{
    private quantity: number;
    private printer: Printer;

    constructor(printer: Printer, quantity: number){
        this.printer = printer;
        this.quantity = quantity;
    }

    public price(): number{

        const amount = this.printer.price * this.quantity;
        return amount;
    }
}
class PrintInvoice{
    private invoice: Invoice;

    constructor(invoice: Invoice){
        this.invoice = invoice
    }

    public print(): void{

        //print code
    }
}

class InvoiceDAO{
    private invoice: Invoice;

    constructor(invoice: Invoice){
        this.invoice = invoice
    }

    public storeInDB(): void{

        //db call
    }
}

const pr = new Printer('hp', 1200, 'black');
const iprice = new CalculateInvoicePrice(pr, 20);
// console.log(iprice.price())
