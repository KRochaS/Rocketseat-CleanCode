


// SRP - SRP: Single Responsiblity Principle
// Calcular um desconto em cima de um pedido

// billet, cred, debit

class CalculateOrderDiscount {
    private paymentMethod: PaymentMethod;
    constructor(paymentMethod: PaymentMethod) {
        this.paymentMethod = paymentMethod;
    }
     // Sem OCP: Open-Closed Principle
    // public execute(amount: number, installments: number, paymentMethod: string) {

    //     if(paymentMethod === 'billet') {
    //         return amount * 0.01;
    //     }

    //     if(paymentMethod === 'credit') {
    //        if(installments === 1) {
    //         return amount * 0.05;
    //        } 

    //        if(installments <= 6) {
    //         return amount * 0.02;
    //        } 

    //        return 0;
    //     }

    //     if(paymentMethod === 'credit') {
    //         return amount * 0.05;
    //     }

    //     return 0;
    // }

    // LSP: Liskov Substitution Principle: Substituir
    // uma dependência exemplo: paymentMethod por uma outra 
    // classe que estende algo semelhante.
    // pode passar qualquer classe Billet, Debit ou Credit 
    // para o paymentMethod que todas irão funcionar

    public execute(amount: number) {
        return this.paymentMethod.getDiscountAmout(amount);
    }
}

class CalculateOrderDiscountOld {
    
    public executeOld(amount: number, paymentMethod: PaymentMethod) {
        return paymentMethod.getDiscountAmout(amount);
    }

}



// Com OCP: Open-Closed Principle
interface PaymentMethod {
    getDiscountAmout:(amount: number) => number;
}

class Billet implements PaymentMethod {
    getDiscountAmout(amount): number {
        return amount * 0.05;
    }
}

class Credit implements PaymentMethod {
    private installments: number; 

    constructor(installments: number) {
        this.installments = installments;
    }
    getDiscountAmout(amount): number {
        if(this.installments === 1) {
            return amount * 0.05;
           } 

           if(this.installments <= 6) {
            return amount * 0.02;
           } 

           return 0;
        }
    }


class debit implements PaymentMethod {
    getDiscountAmout(amount): number {
        return amount * 0.05;
    }
}

const calculateOrderDiscountOld = new CalculateOrderDiscountOld();

// DIP: Dependency Inversion Principle
// Quando a classe é chamada é no momento que é enviado a dependência.
// Quem chama que diz qual é a dependência.
calculateOrderDiscountOld.executeOld(
    2000,
    new Billet()
)

// com o payMethod vindo do constructor 

const calculateOrderDiscount = new CalculateOrderDiscount(new Billet());

calculateOrderDiscount.execute(
    2000,
    
)


// __________________________________________________________________
class SubmitOrderInvoice {
    public execute() {
        // emissão da nota
    }
}

class CreateOrder {
    public execute() {
        // CalculateOrderDiscount
        //SubmitOrderInvoice
    }
}

// Com ISP 

interface Card {
    number: number;
    cvv: number;
    expiration: number;
}

class CreditWithISP implements PaymentMethod, Card {
    private installments: number; 

    constructor(installments: number) {
        this.installments = installments;
    }
    getDiscountAmout(amount): number {
        if(this.installments === 1) {
            return amount * 0.05;
           } 

           if(this.installments <= 6) {
            return amount * 0.02;
           } 

           return 0;
        }
        number: 3;
        cvv: 443;
        expiration: 442;
    }


class debitWithISP implements PaymentMethod, Card {
    getDiscountAmout(amount): number {
        return amount * 0.05;
    }
    number: 3;
    cvv: 443;
    expiration: 442;

}