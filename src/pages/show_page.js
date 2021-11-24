import { useParams } from "react-router";
import forms from "../sampledata/forms";

function ShowPage() {
  const { id } = useParams();
  const form = forms.find((f) => f["id"] == id);
  return (
    <div>
      <header>
        <h1>Show Form Page</h1>
        <p>{form["title"]}</p>
        <h5>Submissions:</h5>
      </header>
    </div>
  );
}

export default ShowPage;
