
type Dish = {
  id: string
  name: string
}

const getDishes = async (): Promise<Dish[]> => {
  const data = await fetch("http://localhost:4000/api/dish", { cache: "no-cache" });
  const dishes = await data.json();
  return dishes;
}


export default async function Menu() {
  const dishes = await getDishes();
  console.log(dishes)
  return (
    <div>
      <div > 
        <h1 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          Was wird wohl auf mein Tellerchen gerotzt? 
        </h1>
        <br></br>
        <ul>
          {dishes.map((dish) => (
            <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/8 shadow-xl">
              <li class="text-slate-500 dark:text-slate-400 mt-2 text-sm" key={dish.id}>{dish.name}</li>
            </div>
          ))}
        </ul>
        <br/>
        <form action="http://localhost:4000/api/dish/create">
          <label for="name">Eine neue Grauslichkeit auf die Karte</label><br/>
          <input type="name" id="name" name="name" /><br/>
          <button type="submit">Geht scho</button>
        </form>
      </div>
    </div>
  );
}