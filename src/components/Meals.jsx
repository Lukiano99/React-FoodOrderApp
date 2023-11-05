import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "../components/Error"
const requestConfig = {};

const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("https://reactmeals-d059c-default-rtdb.firebaseio.com/meals.json", requestConfig, []);
  // } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }
  if (error) {
    return <Error title='Failted to fetch meals' message={error}/>
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
