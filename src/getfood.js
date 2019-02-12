import React from 'react';
import hummus from './frontend/foodimages/hummus.jpg';
import feta from './frontend/foodimages/greekfeta.jpg';
import avocadotoast from './frontend/foodimages/avocadotoast.jpg';
import Granola from './frontend/foodimages/granola.jpg';
import pitacups from './frontend/foodimages/pittacups.jpg';
import honeytoast from './frontend/foodimages/ricottahoneytoast.jpg';
import Parmesanchips from './frontend/foodimages/parmisanchips.jpg';
import DonutApples from './frontend/foodimages/donutapples.jpg';
import CucumberSushi from './frontend/foodimages/cucumbersushi.jpeg';
import avocadodip from './frontend/foodimages/avocadodip.jpg';

let foodlist = [
    {
    name: "Creamy Garlic Hummus",
    picture: src = { hummus },
    alt: "hummus",
    url: href = "https://www.delish.com/cooking/recipe-ideas/a20089167/best-homemade-hummus-recipe/"
},
{
    name: "Greek Feta Dip",
    picture: src = { feta },
    alt: "fetadip",
    url: href = "https://www.delish.com/cooking/recipe-ideas/recipes/a50968/greek-feta-dip-recipe/"
},
{
    name: "Caprese Avocado Toast",
    picture: src = { avocadotoast },
    alt: "avocado toast",
    url: href = "https://www.delish.com/cooking/recipe-ideas/recipes/a53555/greek-avocado-toast-recipe/"
},
{
    name: "Perfect Paleo Granola",
    picture: src = {Granola},
    alt: "Granola",
    url: href = "https://www.delish.com/cooking/recipe-ideas/a25429796/paleo-granola-recipe/"
},
{
    name: "Greek Pita Cups",
    picture: src = {pitacups},
    alt: "Greek Pita Cups",
    url: href = "https://www.delish.com/cooking/recipe-ideas/a25429796/paleo-granola-recipe/"
},
{
    name: "Ricotta-Honey Toast with Berries",
    picture: src = {honeytoast},
    alt: "Ricotta-Honey Toast with Berries",
    url: href = "https://www.delish.com/cooking/recipe-ideas/recipes/a45367/ricotta-honey-toast-with-berries-recipe/"
},
{
    name: "Zucchini Parmesan Chips",
    picture: src = {Parmesanchips},
    alt: "Zucchini Parmesan Chips",
    url: href = "https://www.delish.com/cooking/recipe-ideas/recipes/a45367/ricotta-honey-toast-with-berries-recipe/"
},
{
    name: "Donut Apples",
    picture: src = {DonutApples},
    alt: "Donut Apples",
    url: href = "https://www.delish.com/cooking/recipe-ideas/recipes/a52053/donut-apples-recipe/"
},
{
    name: "Cucumber Sushi",
    picture: src = {CucumberSushi},
    alt: "CucumberSushi",
    url: href = "https://www.delish.com/cooking/recipe-ideas/recipes/a58629/cucumber-sushi-recipe/"
},
{
    name: "Creamy Avocado Dip",
    picture: src = {avocadodip},
    alt: "CucumberSushi",
    url: href = "https://www.delish.com/cooking/recipe-ideas/recipes/a45365/creamy-avocado-dip-recipe/"
},
];
export default function GetFood() {
    return (
        <div>
        {foodlist}
        </div>
    );
};