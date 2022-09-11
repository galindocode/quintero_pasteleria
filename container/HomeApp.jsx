import { Card } from "@components/Card/Card";

import { useState, useEffect } from "react";

export default function HomeApp() {
  const [pasteles, setPasteles] = useState([]);
  useEffect(() => {
    fetch("api/pasteles")
      .then((res) => res.json())
      .then((data) => setPasteles(data));
  });
  return (
    <>
      <div className=" h-screen">
        <div className="grid grid-cols-1 md:grid-cols-4 px-8 justify-center items-center gap-6 py-4">
          {pasteles.map((pastel, index) => (
            <Card pastel={pastel} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
