import { useRouter } from "next/router";
import { ItemApp } from "../container/ItemApp";
import { useState, useEffect } from "react";
import { Loading } from "../components/Common/Loading";

const Item = () => {
  const [pastel, setPastel] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (id) {
      fetch(`api/pasteles/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPastel(data);
          setLoading(false);
        });
    }
  });

  return <>{loading ? <Loading /> : <ItemApp pastel={pastel} />}</>;
};

export default Item;
