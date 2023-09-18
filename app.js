import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

/**
 * Funcion que evaluasi el quiz finalizo, ademas aplica las demas funciones UI
 * @param {Quiz} quiz Recibe como parametro el objeto quiz.
 * @param {UI} ui Recibe como parametro el objeto ui
 */
const renderPage = (quiz, ui) => {
//Si el quiz finalizo entonces..
  if (quiz.isEnded()) {
    //muestra el score con (el contador score en quiz.js)
    ui.showScores(quiz.score);
  } else { //sino
    //Pone la pregunta en el html usando (la funcion que retorna el objeto y accedemos a la propiedad text)
    ui.showQuestion(quiz.getQuestionIndex().text);
    //Pone la pregunta en el html usando (la funcion que retorna el objeto y accedemos a la propiedad choices),
    //Usa la funcion para obtener la opcion que selecciono el usuario  y usando la funcion guess de quizz (sube el puntaje o no)
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice);
      renderPage(quiz, ui);//Se usa recursion para para actualizar el resultado.
    });
    //Por ultimo se usa la funcion para mostrar el progreso con los parametros de la posicion actual y la longitud.
    ui.showProgress(quiz.questionIndex, quiz.questions.length);
  }
};
/**
 * Funcion principal.
 */
function main() {
  const quiz = new Quiz(questions);
  const ui = new UI();

  renderPage(quiz, ui);
}

main();
