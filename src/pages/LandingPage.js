import React, { useEffect, useState } from "react";

const LandingPage = () => {
  const [data, setData] = useState();
  const [id, setId] = useState();
  useEffect(() => {
    fetch(
      "https://random-data-api.com/api/lorem_ipsum/random_lorem_ipsum?size=20"
    ).then((res) => res.json().then((res) => setData(res)));
  }, []);
  useEffect(() => {
    if (id) {
      let temp = data.filter((item) => item.id !== id);
      setData(temp);
      console.log(id);
    }
  }, [id]);
  return (
    <div className="landing-wrapper">
      {data ? (
        data.map((item, index) => (
          <>
            <p
              style={{
                border: "1px solid #f1f1f1",
                margin: "10px",
                padding: "10px",
              }}
            >
              {index + 1 + " - " + item["very_long_sentence"]}
              <button onClick={(e) => setId(item["id"])}>delete</button>
            </p>
          </>
        ))
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default LandingPage;
