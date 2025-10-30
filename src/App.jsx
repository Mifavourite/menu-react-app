// src/App.jsx

function NutritionalInfo({ nutrition }) {
  return (
    <div>
      <p>Calories: {nutrition?.calories} kcal</p>
      <p>Protein: {nutrition?.protein} g</p>
      <p>Carbs: {nutrition?.carbs} g</p>
      <p>Fat: {nutrition?.fat} g</p>
    </div>
  );
}

function MenuItem({ title, price, nutrition }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
      <h3>{title}</h3>
      <p>{price}</p>
      <NutritionalInfo nutrition={nutrition} />
    </div>
  );
}

function Category({ title, foods }) {
  return (
    <div>
      <h2>{title}</h2>
      {foods.map((food, idx) => (
        <div key={idx}>{food}</div>
      ))}
    </div>
  );
}

function App() {
  const friedChicken = [
    <MenuItem
      title="2pc Fried Chicken Set"
      price="RM 10.00"
      nutrition={{ calories: 540, protein: 31, carbs: 35, fat: 29 }}
    />,
    <MenuItem
      title="6-piece Nuggets"
      price="RM 8.00"
      nutrition={{ calories: 270, protein: 13, carbs: 16, fat: 16 }}
    />,
  ];

  const desserts = [
    <MenuItem
      title="Ice Cream"
      price="RM 5.00"
      nutrition={{ calories: 207, protein: 2, carbs: 33, fat: 6 }}
    />,
    <MenuItem
      title="Apple Pie"
      price="RM 7.00"
      nutrition={{ calories: 270, protein: 1, carbs: 43, fat: 10 }}
    />,
  ];

  return (
    <div>
      <h1>🍽 Menu</h1>
      <Category title="Fried Chicken" foods={friedChicken} />
      <Category title="Desserts" foods={desserts} />
    </div>
  );
}

export default App;
