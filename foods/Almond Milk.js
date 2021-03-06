var NAME = "Almond Milk";

var f = new Food(
    new Ingredient(
        NAME,
        100,
        "ml"
    ),
    [VEGAN, GLUTENFREE],
    new NutritionInfo()    
)
FOODS[NAME] = f;
setListEqual(
    NAME,
    [
        "145ml",
        "100g"
    ]
)

setListSubstitute(
    NAME,
    [
        [NAME, f.ingredient.amount.toString() + f.ingredient.unit],
        ["Cow's Milk", "100ml"]

    ]
)