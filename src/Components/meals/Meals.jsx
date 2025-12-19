
import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import MealCard from "./MealCard";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Tabs from "./../tabs/Tabs";

const Meals = () => {
  const { name } = useParams(); // category name
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  async function getMeals() {
    try {
      setIsLoading(true);

      let url = "";

      name
        ? (url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
        : (url = "https://www.themealdb.com/api/json/v1/1/search.php?s");

      const { data } = await axios.get(url);
      setMeals(data.meals || []);
      if (data.meals === null) {
        navigate("/notFound");
        return;
      }
    } catch (err) {
      console.error(err);
      navigate("/notFound");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getMeals();
  }, [name]);

  return (
    <>
      <Tabs />
      <section className="sm:ml-70 py-10">
        {isLoading ? (
          <div>
            <Loading />
          </div>
        ) : (
          meals && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {meals.map((meal) => (
                <MealCard key={meal.idMeal} meal={meal} />
              ))}
            </div>
          )
        )}
      </section>
    </>
  );
};

export default Meals;
