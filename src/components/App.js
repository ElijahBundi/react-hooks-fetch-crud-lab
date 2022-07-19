import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [quiz, setQuiz] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then((data) => setQuiz(data))
  }, [])

  function handleAddQuiz(newQuiz) {
    setQuiz(...quiz, newQuiz)
  }

  function handleDeleteQuestion(deletedquiz) {
    const updatedQuestions = quiz.filter((question) => question.id !== deletedquiz.id)
    setQuiz(updatedQuestions)
  }

  function handleUpdateQuestion(updatedquiz) {
    const updatedQuestions = quiz.map((question) => {
      if (question.id === updatedquiz.id) {
        return updatedquiz
      } else {
        return question
      }
    })
    setQuiz(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuiz={handleAddQuiz}/> : <QuestionList quiz={quiz} onOnDeleteQuestion={handleDeleteQuestion} onOnUpdateQuestion={handleUpdateQuestion}/>}
    </main>
  );
}

export default App;
