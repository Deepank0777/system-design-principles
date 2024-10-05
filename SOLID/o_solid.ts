// O: Open Close Principle
// Class should be open for extension but close for modification
import {Printer, Invoice} from './s_solid';

/*wrong implementation

class InvoiceDAO{
    private quantity: number;
    private printer: Printer;

    constructor(printer: Printer, quantity: number){
        this.printer = printer;
        this.quantity = quantity;
    }

    public storeInDB(): void{

        //db call
    }
}

implementation of InvoiceDAO in the s_solid.ts previous has an issue it followes the 
principle of single responsibility but it donesn't follow "O" because let's say if some
day we want to store the invoice in the file as well, we'll have to change/add methid in 
that class. Here is a fix for this.

*/

//correct implementation
interface InvoiceDAO{
    save(invoice: Invoice): void
}

class SaveInDB implements InvoiceDAO{
    
    private invoice: Invoice;

    constructor(invoice: Invoice){
        this.invoice = invoice;
    }

    save(): string {
        //save db calls
        return 'saved in db'+this.invoice
    }
}

class SaveInFile implements InvoiceDAO{
    private invoice: Invoice;

    constructor(invoice: Invoice){
        this.invoice = invoice;
    }

    save(invoice: Invoice): void {
        //save db calls
    }
}

const pr = new Printer('hp', 5000, 'white');
const quantity = 10;
const iv = new Invoice(pr, quantity);

new SaveInDB(iv).save()
