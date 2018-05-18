import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
            {
                title: 'Pizza',
                instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
                ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4OOjbC4MEk75pfn9XQWIarE9wml-GjraGvbFV0ujaHuQ6alTEBQ"
            },
            {
                title: "Milkshake",
                instructions: "Combine ice cream and milk.  Blend until creamy",
                ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcoSycL46G7sN1LA4CgCjKoWwkGTxZCtknmXCdiGHZs3WOhV4ryA"
            },
            {
                title: "Avocado Toast",
                instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
                ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0sH3_vaSFlv9eRqXnWZPhPXYQpg0fEBJbiWFJPjK9nF6Yhvu2NA"
            }

        ]
    };
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    render() {
        const recipes = this.props.recipes.map((r, index) => (
            <Recipe key={index} {...r} />
        ));
        return (
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}

export default RecipeList;