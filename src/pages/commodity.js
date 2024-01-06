import { useState, useEffect } from "react";

export default function Commondity() {
  const allStates = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
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

    fetch("https://stablediffusionapi.com/api/v3/text2img", {
      method: "POST",
      headers: {
        key: "DrLIE1kF9ogOEEJp1JfxrzG5PuYrnnBAQ9htQ4lYxXMqa4xDJplSzBxNsyBO",
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
          {/* https://stablediffusionapi.com/playground */}
          {imageURL && <img width={200} src={imageURL} />}
          <div>
            <select
              onChange={(e) => setSelectedState(e.target.value)}
              value={selectedState}
            >
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
