import { Question } from "./Question.js";
export class Quiz {
  questionIndex = 0; //Contador, para la posicion en la lista de preguntas.
  score = 0; //Contador del puntaje de respuestas correctas.

  /**
   * Es para pasar toda la lista de preguntas, junto con las propiedades
   * @param {{Question[]}} questions Recibe de parametro toda la lista
   */
  constructor(questions) {
    this.questions = questions;
  }

  /**
   * Es para obtener el index o el posicion actual de la lista.
   * Basicamente para saber en que pregunta se encuentra
   * Para ello se necesita un contador llamado 'questionIndex'
   * @returns {Question} Retorna la pregunta actual.
   */
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }
  /**
   * Es para finalizar el quiz.
   * Si el index (posicion de pregunta actual) ha alcanzado al longitud
   * total de la lista de preguntas, significa que ha llegado al final.
   * @returns Si retorna true, finaliza el quiz.
   */
  isEnded() {
    return this.questions.length === this.questionIndex;
  }

  /**
   * Usando la funcion 'getQuestionIndex', se obtiene la pregunta (que es un objeto)
   * actual y usando la funcion del objeto (pregunta) llamado 'correctAnswer'
   * se obtiene un true en caso de que la respuesta sea correcta y el score aumenta en 1.
   * Independientemente del resultado, el index aumenta y sigue a la pregunta siguiente.
   * @param {string} answer Recibe de parametro la respuesta y evalua si es correcta.
   */
  guess(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }
}
