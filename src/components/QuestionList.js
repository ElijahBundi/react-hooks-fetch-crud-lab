import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ quiz, onOnDeleteQuestion, onOnUpdateQuestion }) {  
 
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {quiz.map((question) => (
          <QuestionItem key={question.id} question={question} onDeleteQuestion={onOnDeleteQuestion} onUpdateQuestion={onOnUpdateQuestion}/> 
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
