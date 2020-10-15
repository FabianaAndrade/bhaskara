function Calcular() {
    let A = document.getElementById('ValA')
    let B = document.getElementById('ValB')
    let C = document.getElementById('ValC')
    let res = document.getElementById('res')

   
        let A1 = Number(A.value)
        let B1 = Number(B.value)
        let C1 = Number(C.value)

        let delta = (B1*B1) - 4*A1*C1
        

        if (delta < 0) {
            res.innerHTML = `O valor de delta(Δ) é ${delta}, ou seja, um número negativo. Não tem continuação!`
        } 
        else if (A1== 0 && B1 ==0 && C1 ==0) {
            res.innerHTML = 'Todos os valores encontrados foram ZERO!'
        }
        else { 
            res.innerHTML = ''
            res.innerHTML += `<P>O valor de Delta(Δ) é: ${delta}</P>`
            res.innerHTML += `<p> A raiz de Delta(Δ) é: ${Math.sqrt(delta)}</P>`
            
            let X1 = (- B1 + Math.sqrt(delta))/ (2*A1)
            let X2 = (- B1 - Math.sqrt(delta))/ (2*A1)
            
            res.innerHTML += `<p> O valor do X1 é: ${ X1} </p>`
            res.innerHTML += `<p> O valor do X2 é: ${X2} </p>`
           
        } 
    }