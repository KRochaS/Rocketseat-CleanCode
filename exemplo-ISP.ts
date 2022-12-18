interface PrinterInterface {
    print: () => void;
    scan: () => void;
}


class PrinterWithOneInterface implements PrinterInterface {
    print: () => void;
    scan: () => void;
}


// ISP: Interface Segregation Principle

// Segredar interfaces 

interface PinterWithScan {
    scan: () => void;
}

interface BasicPrinter {
    print: () => void;
}

class Printer implements BasicPrinter, PinterWithScan {
    scan: () => void;
    print: () => void;
}