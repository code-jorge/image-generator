import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getImageResult } from "../../utils/api";

const Image = ()=> {

  const { id } = useParams();

  useEffect(() => {
    const result = getImageResult({ id });
    console.log(result);
  }, [id])

  return (
    <p>There's Image here</p>
  )
}

export default Image