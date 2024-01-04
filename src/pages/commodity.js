import { useState, useEffect } from "react";

export default function Commondity() {
  const allStates = ["Karnataka", "Andhra Pradesh", "Bihar", "Chandigarh"];
  const [states, setState] = useState();
  const [selectedState, setSelectedState] = useState("Karnataka");
  const API_URL = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&limit=200&filters%5Bstate%5D=${selectedState}`;
  const [commodity, setCommodity] = useState([]);
  const [imageURL, setImageURL] = useState("");
  const loadData = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => setCommodity(result.records))
      .catch((err) => console.log(err));
  };
  const getImage = (name) => {
    const form = new FormData();
    form.append("prompt", name);

    fetch("https://clipdrop-api.co/text-to-image/v1", {
      method: "POST",
      headers: {
        "x-api-key":
          "36d35b4a5e80f429edccaa935175221d9fc2f31f3fd8050880e2afaadbd806bee6f575c9580a2eb68322ae3ed48e5c28",
      },
      body: form,
    })
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        console.log(buffer);
        setImageURL(buffer);
        // buffer here is a binary representation of the returned image
      });
  };
  useEffect(() => {
    loadData();
    setState(allStates);
    getImage("dog");
  }, [selectedState]);
  if (commodity == null) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div>
          <h3>Commondity</h3>
          {imageURL && <img width={200} />}
          <div>
            <select onChange={(e) => setSelectedState(e.target.value)}>
              {states &&
                states.map((item) => {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div className="ctable">
          <table>
            <thead>
              <tr>
                <th>arrival_date</th>
                <th>commodity</th>
                <th>district</th>
                <th>grade</th>
                <th>market</th>
                <th>max_price</th>
                <th>min_price</th>
                <th>modal_price</th>
                <th>state</th>
                <th>variety</th>
              </tr>
            </thead>
            <tbody>
              {commodity &&
                commodity.map((item, index) => {
                  return (
                    <tr key={item + index}>
                      <td>{item.arrival_date}</td>
                      <td>{item.commodity}</td>
                      <td>{item.district}</td>
                      <td>{item.grade}</td>
                      <td>{item.market}</td>
                      <td>{item.max_price}</td>
                      <td>{item.min_price}</td>
                      <td>{item.modal_price}</td>
                      <td>{item.state}</td>
                      <td>{item.variety}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
