import { Question } from '../models/Question.js';
import { data } from './data.js';
//Usamos la funcion .map para iterar en cada elemento del arreglo data que viene del modulo data.js
//por cada recorrido(iteracion) creara una instancia de la clase Question que viene del modulo Question.js
//tiene como parametros question, choices y aswer que corresponde con text, choices y aswer del constructor.
export const questions = data.map(
  (question) =>
    new Question(question.question, question.choices, question.answer)
);
