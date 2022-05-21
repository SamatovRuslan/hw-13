import React, { useEffect, useState } from "react";
import Card from "./UI/Card";

export default function List() {
  const [photo, setPhoto] = useState();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoad(true);
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setPhoto(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoad(false);
      });
  }, []);

  if (load) {
    return <p>Данные загружается</p>;
  }

  if (error || !Array.isArray(photo)) {
    return <p>Ошибка</p>;
  }

  return (
    <Card className="cards">
      {photo.map((item) => {
        return (
          <div className="card">
            <h3>{item.title}</h3>
            <p>{item.id}</p>
            <p>text</p>
            <img src={item.thumbnailUrl} alt=""></img>
          </div>
        );
      })}
    </Card>
  );
}
