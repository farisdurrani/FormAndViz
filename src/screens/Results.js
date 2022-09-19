import React, { useEffect, useState } from "react";
import { ResponseBoxData } from "../components/index";
import { getAllResponses, getAllAdmins } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";

const Results = () => {
  const auth = getAuth();
  const [data, setData] = useState([]);
  // 0 = admin, 1 = normal user, 2 = not signed in
  const [permission, setPermission] = useState(2);

  useEffect(() => {
    const getAdmins = async () => {
      return await getAllAdmins();
    };

    const loadData = async () => {
      const new_data = await getAllResponses();
      setData(new_data);
    };

    onAuthStateChanged(auth, async (user) => {
      const allAdmins = await getAllAdmins();
      if (user) {
        if (allAdmins.indexOf(user.email) > -1) {
          setPermission(0);
          loadData();
        } else {
          setPermission(1);
        }
      } else {
        window.location.replace("/login");
      }
    });
  }, []);

  if (permission === 1) {
    return (
      <div id="results">
        <p className="text-center mt-5">
          Please login as an admin to view this page
        </p>
      </div>
    );
  }

  if (permission === 2) {
    return (
      <div id="results">
        <p className="text-center mt-5">Loading...</p>
      </div>
    );
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
