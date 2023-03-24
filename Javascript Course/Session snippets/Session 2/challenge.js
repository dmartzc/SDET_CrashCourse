


function CalculadoraImpuestos(monto, tax){
    console.log(monto)    
    console.log(tax)
    return monto * tax
}

function Cajero(amount, CalcImp, impuesto){
    return amount + CalcImp(amount, impuesto)
}



function Recibo(monto, tax){    
    console.log(tax)
    const total = Cajero(monto, CalculadoraImpuestos, tax)
    console.log(`
                 Total = ${total}`)
}


Recibo(500, 0.16)

//---------------------------------------------------//
// Task 1: Convertir constante impuesto en una variable
// Task 2: Consumir esa variable en la funcion CalculadoraImpuestos


