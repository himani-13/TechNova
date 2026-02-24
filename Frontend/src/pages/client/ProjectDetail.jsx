import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();

  return (
    <div className="page">
      <h1>Project Detail</h1>
      <p>Project ID: {id}</p>
    </div>
  );
}