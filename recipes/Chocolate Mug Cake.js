var r = new Recipe(

    'Chocolate Mug Cake',
    'An oiless vegan chocolate mug cake',
    [
        new Step(
            1,
            'Measure out and mix the dry ingredients in a mug',
            [
                new Ingredient(
                    'Flour',
                    '1/4',
                    'Cup'),
                new Ingredient(
                    'Sugar',
                    '1/8',
                    'Cup'),
                new Ingredient(
                    'Cocoa Powder',
                    '1/4',
                    'Cup'),
                new Ingredient(
                    'Baking powder',
                    '8/4',
                    'Teaspoon'),
            ],
            180),

        new Step(
            2,
            'Mix in the almond milk until no lumps remain',
            [
                new Ingredient(
                    'Almond Milk',
                    '0.375',
                    'Cup'),
            ],
            120),

        new Step(
            3,
            'Add the nutella to the batter',
            [
                new Ingredient(
                    'Nutella',
                    1,
                    'Teaspoon'),
            ],
            60),

        new Step(
            4,
            'Put the mug cake in the microwave for 3 minutes or until cooked',
            [

            ],
            180),

    ],

    {},//Groups

    {}//Repeats
);
RECIPEBOOK.add(r);