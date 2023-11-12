function MyRecipesComponent({label, image, type, mealType, totalTime, calories, ingredients}) {
    return(
        <div>
            <div className="container">
            <h2>{label}</h2>
            </div>
            <div className="container">
            <img src={image} width="300px" alt="img"/>
            </div>
            <div className="container">
            <p>Cuisine: {type}</p>
            </div>
            <div className="container">
                <p>{mealType}</p>
            </div>
            <div className="container">
                <p>Cooking time: {totalTime} min</p>
            </div>
            <div className="container">
                <p>{calories.toFixed()} calories</p>
            </div>

            <ul className="container list">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        <img src="https://img.icons8.com/?size=2x&id=4sEVpvAY7F1g&format=png" width="30px" alt="imgIcon"/>
                        {ingredient}</li>
                ))}
            </ul>
        </div>
    )
}
//cooking time 
export default MyRecipesComponent;