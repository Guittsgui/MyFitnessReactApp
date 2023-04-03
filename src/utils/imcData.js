export const imcDatas = [
    {
        imc: [0, 18.5],
        class: "Magreza",
        obesidade: "Grau Zero",
        yourImc: 0
    },
    {
        imc: [18.6 , 24.9],
        class: "normal",
        obesidade: "Grau Zero",
        yourImc: 0
    },
    {
        imc: [25, 29.9],
        class: "Sobrepeso",
        obesidade: "Grau Um",
        yourImc: 0
    },
    {
        imc: [30, 39.9],
        class: "Obesidade",
        obesidade: "Grau Dois",
        yourImc: 0
    },
    {
        imc: [40,1000],
        class: "Obesidade Grave",
        obesidade: "Grau Três",
        yourImc: 0
    }
]


export const calculaImc = (height, weight) => {
    const IMC = weight / (height * height)

    for ( let i in imcDatas){
        if(IMC >= imcDatas[i].imc[0] && IMC <= imcDatas[i].imc[1]){
          imcDatas[i].yourImc = IMC
          return imcDatas[i]          
        }
    }
    return null
}