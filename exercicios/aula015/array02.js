let paises = ['BRA', 'USA', 'ESP', 'JAP']
console.log(`Otimos paises: ${paises}`)

console.log(`Eu moro no ${paises[0]}`)

paises.push('ALM')
console.log(`Adicionei a Alemanha, o push adiciona sempre no final: ${paises}`)

paises[5] = 'CAN'
console.log(`Substitui ESP por CANADÁ, quando não digo devo colocar o numero do indice: ${paises}`)