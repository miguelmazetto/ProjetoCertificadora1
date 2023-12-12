export default () => [
    { // 1
        "index": 1,
        "enunciado": "Qual é a unidade de medida da velocidade no Sistema Internacional (SI)?",
        "dificuldade": 0,
        "tipo": "option",
        "options": [
            "Metros por segundo (m/s)",
            "Newtons (N)",
            "Joules (J)",
            "Watts (W)"
        ],
        "resposta": 0,
        "resolvido": 0,
    },
    { // 2
        "index": 2,
        "enunciado": "Um carro viaja a uma velocidade constante de 90 km/h por 2 horas. Qual é a distância total percorrida pelo carro?",
        "dificuldade": 0,
        "tipo": "dissert",
        "resposta": /^0*180((\.?000\s*m?)|(\s*(km)?))(?!\d)/,
        "resolvido": 0
    },
    { // 3
        "index": 3,
        "enunciado": "Qual das seguintes grandezas não é uma grandeza vetorial?",
        "dificuldade": 0,
        "tipo": "option",
        "options": [
            "Velocidade",
            "Massa",
            "Força",
            "Aceleração"
        ],
        "resposta": 1,
        "resolvido": 0
    },
    { // 4
        "index": 4,
        "enunciado": "Um objeto é lançado verticalmente para cima com uma velocidade inicial de 20 m/s. Quanto tempo levará para o objeto atingir o ponto mais alto de sua trajetória? (Use g = 9,8 m/s² para a aceleração devido à gravidade)",
        "dificuldade": 0,
        "tipo": "dissert",
        "resposta": /^0*2([\.,](0|1)\d*)?\s*(?!\d)/,
        "resolvido": 0
    }, // /^0*20\.?(3|4|5)((\d\d([\.,]\d+)?\s*cm)|((\.\d+)\s*m))(?!\d)/,
    { // 5
        "index": 5,
        "enunciado": "Qual é a Terceira Lei de Newton, também conhecida como a Lei da Ação e Reação?",
        "dificuldade": 1,
        "tipo": "option",
        "options": [
            '"Um objeto em movimento tende a permanecer em movimento, e um objeto em repouso tende a permanecer em repouso."',
            '"A força resultante sobre um objeto é igual à massa do objeto multiplicada pela aceleração."',
            '"Para cada ação, há uma reação igual e oposta."',
            '"A energia não pode ser criada nem destruída, apenas transformada."'
        ],
        "resposta": 2,
        "resolvido": 0
    },
    { // 6
        "index": 6,
        "enunciado": "Calcule o trabalho realizado por uma força de 50 Newtons que move um objeto por uma distância de 10 metros em linha reta na direção da força.",
        "dificuldade": 1,
        "tipo": "dissert",
        "resposta": /^0*500(\s*[jJ]?)(?!\d)/,
        "resolvido": 0
    },
    { // 7
        "index": 7,
        "enunciado": "Qual é a unidade de medida do período de uma onda?",
        "dificuldade": 1,
        "tipo": "option",
        "options": [
            "Segundos (s)",
            "Hertz (Hz)",
            "Metros (m)",
            "Joules (J)"
        ],
        "resposta": 0,
        "resolvido": 0
    },
    { // 8
        "index": 8,
        "enunciado": "Calcule a aceleração de um objeto que vai de 15 m/s a 30 m/s em 3 segundos.",
        "dificuldade": 2,
        "tipo": "dissert",
        "resposta": /^0*5(\s*m?)(?!\d)/,
        "resolvido": 0
    },
    { // 9
        "index": 9,
        "enunciado": "Qual é a unidade SI da carga elétrica?",
        "dificuldade": 2,
        "tipo": "option",
        "options": [
            "Coulombs (C)",
            "Ohms (Ω)",
            "Amperes (A)",
            "Volts (V)",
        ],
        "resposta": 0,
        "resolvido": 0
    },
    { // 10
        "index": 10,
        "enunciado": "Calcule a força gravitacional entre duas massas de 100 kg e 150 kg que estão separadas por uma distância de 10 metros. Use a constante gravitacional universal G = 6,67 x 10^-11 N m²/kg².",
        "dificuldade": 2,
        "tipo": "dissert",
        "resposta": /^0*((10([\.,]?(0|1)\d*)?)|(9[\.,]?(9|8)\d*))\s*[Nn](?!\d)/,
        "resolvido": 0
    },
]