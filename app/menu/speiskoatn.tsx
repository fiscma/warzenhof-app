export type Dish = {
    id: string
    name: string
  }
  
  const getDishes = async (): Promise<Dish[]> => {
    const data = await fetch("http://localhost:4000/api/dish", { cache: "no-cache" });
    const dishes = await data.json();
    return dishes;
  }
  
  export async function Speiskoatn() {
    const dishes = await getDishes();
    return (
      <ul>
      {dishes.map((dish) => (
        <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/8 shadow-xl">
          <li className="text-slate-500 dark:text-slate-400 mt-2 text-sm" key={dish.id}>{dish.name}</li>
        </div>
      ))}
    </ul>
    );
  }