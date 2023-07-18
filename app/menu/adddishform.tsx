import { Dish } from "./speiskoatn";

export default async function DishForm(props) {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
    console.log("UAAA")
  }

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Jo und wos?
        </label><br />
        <input type="text" id="name" name="name"></input><br />
        <button type="submit">Jo dann druck hoit</button>
      </form>
    </div>
  );
}
