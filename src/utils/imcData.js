export const imcDatas = [
    {
        imc: 18.5,
        class: "Magreza",
        obesidade: "Grau Zero"
    },
    {
        imc: 24.9,
        class: "normal",
        obesidade: "Grau Zero"
    },
    {
        imc: 29.9,
        class: "Sobrepeso",
        obesidade: "Grau Um"
    },
    {
        imc: 39.9,
        class: "Obesidade",
        obesidade: "Grau Dois"
    },
    {
        imc: 40,
        class: "Obesidade Grave",
        obesidade: "Grau Três"
    }
]


export const calculaImc = (height, weight) => {
    const IMC = weight / (height * height)
    return IMC
}