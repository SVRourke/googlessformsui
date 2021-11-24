import { useParams } from "react-router";
import forms from "../sampledata/forms";

function ShowForm() {
  const {id} = useParams()
  const form = forms.select(f => i[:id] == id)
  return (
    <div>
      <header>
        <h1>Show Form Page</h1>
        <p>{form["title"]}</p>
      </header>
    </div>
  );
}

export default ShowForm;
