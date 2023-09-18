export class Question{
    /**
     * Clase constructora para crear las preguntas y obtener una respuesta
     * @param {string} text Texto de la pregunta 
     * @param {string[]} choices Arreglo de las opciones 
     * @param {string} answer Contiene la respuesta correcta
     */
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    /**
     * Funcion que recibe de parametro la respuesta elegida por el usuario
     * retorna true si la respuesta es igual al aswer del objeto.
     * @param {string} choice Parametro que recibe la respuesta
     * @returns Retorna si es la respuesta es verdadera o falsa
     */
    correctAnswer(choice){
        return choice ===  this.answer;
    }
}