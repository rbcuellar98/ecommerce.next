const formatPrice = (amount: number) =>{
    // format currency
    return new Intl.NumberFormat('en-CA',{
        style: 'currency',
        currency: 'CAD'
    }).format(amount/100)
}

export default formatPrice;