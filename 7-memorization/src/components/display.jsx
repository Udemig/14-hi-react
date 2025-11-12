import React from "react";

const Display = ({ count }) => {
  console.log("Component render oldu");
  return <h2>{count}</h2>;
};

// Bu örnekte kapsayıcı component olan SecondExa component'ı her değiştiğinde kapsayıcının render olmasından kaynaklı display component'ı değişen state'i kullanmasa bile gereksiz yere render oluyordu
// Bir component'ın aldığı prop'lar değişmediği müddetçe render olmasının önüne geçmek için React.memo kullanırız.
// Kapsayıcı elmentin render olmasından kaynaklı alt elementlerin gereksiz yere render olmasının önüne geçeriz

export default React.memo(Display);
