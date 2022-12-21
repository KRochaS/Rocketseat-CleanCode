export class Order {
    private total: number;
    private createdAt: Date;
    public customerDocument: string; 

    constructor(total: number, customerDocument: string) {
        this.total = total;
        this.createdAt = new Date();
        this.customerDocument = customerDocument;
    }
}