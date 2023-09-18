export class UI {
  constructor() {}
  /**
   *Funcion para mostrar la pregunta en el html.
   * @param {string} text Recibe de parametro el texto que mostrara en el html
   */
  showQuestion(text) {
    const questionTittle = document.querySelector("#question");
    questionTittle.innerHTML = text;
  }
  /**
   * Funcion para mostrar las opciones de la pregunta.
   * @param {string[]} choices Recibe de parametro el arreglo con las opciones de la pregunta.
   * @param {function} callback Recibe la 
   */
  showChoices(choices, callback) {
    const choicesContainer = document.querySelector("#choices");
    choicesContainer.innerHTML = ''; // Cada vez que se ejectuta la funcion, limpia el contenedor
    /**
     * Se usa .map() para crear un nuevo arreglo con dos parametros elemento actual(choice) 
     * y el indice(index) que devuelve la posicion del elemento actual.
     * En cada iteracion/recorrido creara un boton con el contenido del arreglo y lo
     * agregara al html con .append y se añade la clase.
     * @returns Retorna el boton.
     */
    const choicesButtoms = choices.map((choice, index) => {
      const button = document.createElement("button");
      button.innerHTML = choices[index];
      button.className = "button";
      /**
       * Metodo para escuchar al boton y aplicar una funcion 
       * callback que contiene el texto actual del boton 
       * para despues evaluarlo en otra funcion
       */
      button.addEventListener('click', () => callback(choices[index]));

      choicesContainer.append(button);

      return button;
    });
  }
/**
 * Funcion para mostrar el resultado una vez finalizado el quiz
 * @param {number} score El total del score
 */
  showScores(score){
    const quizEndHTML = `
    <h1>Resultados <h1>
    <h2>Tu puntuacion: ${score} <h2>`;
    const element = document.querySelector('#quiz');
    element.innerHTML = quizEndHTML;
  }
/**
 * Es para mostrar en el HTML el numero de la pregunta y el total de preguntas.
 * @param {number} currentIndex El indice en el que se esta en el quiz
 * @param {number} total El total de preguntas
 */
  showProgress(currentIndex, total){
    const element = document.querySelector('#progress');
    element.innerHTML = `Pregunta ${currentIndex} de ${total}`
  }
}
