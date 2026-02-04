import React, { useContext } from 'react'

const Recipes = () => {
const {data} = useContext(datacontext);
const renderrecipes = data.map ((recipe) => {
    <div key = {recipe.id}>
    <h1>{recipe.title}</h1>
    </div>})

  return (
    <div>{renderrecipes}</div>
  )
}

export default Recipes