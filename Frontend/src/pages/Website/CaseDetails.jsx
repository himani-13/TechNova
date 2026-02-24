import { useParams } from "react-router-dom";

export default function CaseDetails() {
  const { id } = useParams();

  return (
    <div className="page">
      <h1>Case Study Details</h1>
      <p>Case ID: {id}</p>
      <p>Detailed content coming soon...</p>
    </div>
  );
}