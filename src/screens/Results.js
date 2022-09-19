import React, { useEffect, useState } from "react";
import { ResponseBoxData } from "../components/index";
import { getAllResponses } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Results = () => {
  const auth = getAuth();
  const [data, setData] = useState([]);
  const [abort, setAbort] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const new_data = await getAllResponses();
      setData(new_data);
    };

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAbort(false);
        loadData();
      } else {
        window.location.replace("/login");
      }
    });
  }, []);

  if (abort) {
    return <>Loading...</>;
  }

  const numberOfQuestions = data?.length ? Object.keys(data[0]).length / 4 : 0;
  const ZeroToN = Array.from(Array(numberOfQuestions).keys());

  return (
    <div id="results">
      {ZeroToN.map((_, i) => (
        <ResponseBoxData
          key={i}
          question={data[0][`question${i}`]}
          type={data[0][`type${i}`]}
          responses={data.map((e) => e[`response${i}`])}
        />
      ))}
    </div>
  );
};

Results.propTypes = {};

export default Results;
