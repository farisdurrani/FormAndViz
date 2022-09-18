import React from "react";
import { ResponseBoxData } from "../components/index";

const Results = (props) => {
  const data = [
    {
      question1: "Name",
      description1: "Enter",
      type1: "shortAns",
      response1: "Lara Croft",

      question2: "Email",
      description2: null,
      type2: "shortAns",
      response2: "a@gmail.com",

      question3: "Age",
      description3: null,
      type3: "shortAns",
      response3: 18,

      question4: "Can you attend?",
      description4: "Enter",
      type4: "radio",
      response4: "Yes",

      question5: "What are the names of people attending?",
      description5: null,
      type5: "longAns",
      response5: "lBleh bleh",

      question6: "How did you hear about this event?",
      description6: null,
      type6: "checkbox",
      response6: ["Website", "Friend", "Newsletter"],

      question7: "Do you have any dietary restrictions?",
      description7: null,
      type7: "select",
      response7: "Vegan",

      question8: "What is your level of excitedness for the event? (0-100)",
      description8: null,
      type8: "range",
      response8: 80,
    },
    {
      question1: "Name",
      description1: "Enter",
      type1: "shortAns",
      response1: "Lara Croft",

      question2: "Email",
      description2: null,
      type2: "shortAns",
      response2: "a@gmail.com",

      question3: "Age",
      description3: null,
      type3: "shortAns",
      response3: 18,

      question4: "Can you attend?",
      description4: "Enter",
      type4: "radio",
      response4: "Yes",

      question5: "What are the names of people attending?",
      description5: null,
      type5: "longAns",
      response5: "lBleh bleh",

      question6: "How did you hear about this event?",
      description6: null,
      type6: "checkbox",
      response6: ["Website", "Friend", "Newsletter"],

      question7: "Do you have any dietary restrictions?",
      description7: null,
      type7: "select",
      response7: "Vegan",

      question8: "What is your level of excitedness for the event? (0-100)",
      description8: null,
      type8: "range",
      response8: 80,
    },
  ];

  return (
    <div id="results">
      <ResponseBoxData
        question={data[0].question1}
        description={data[0].description1}
        type={data[0].type1}
        response={data.map((e) => e.response1)}
      />
      <ResponseBoxData
        question={data[0].question2}
        description={data[0].description2}
        type={data[0].type2}
        response={data.map((e) => e.response2)}
      />
    </div>
  );
};

Results.propTypes = {};

export default Results;
