import * as React from "react";


const QnA = ({question, answer}) => {
  return (
    <div>
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
};

export default QnA;
