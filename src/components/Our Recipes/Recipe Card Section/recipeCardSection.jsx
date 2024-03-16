const RecipeCardSection = ({ recipe, handleCook }) => {
    const {recipe_id, recipe_name, short_description, ingredients, preparing_time, calories, recipe_image} = recipe;

    const [one, two, three] = ingredients;

    return (
        <div className="border-2 border-gray-300 rounded-xl">
            <div className="p-6">
                <div className="mb-4">
                    <img height="200px" width="330px" className="rounded-2xl" src={recipe_image} alt="" />
                </div>

                <div className="mb-8">
                    <h3 className="font_lexend text-xl font-semibold mb-3">{recipe_name}</h3>
                    <p className="font_fira_sans font-normal text-[#878787]">{short_description}</p>
                </div>

                <div className="mb-8">
                    <h4 className="font_lexend font-medium mb-3">Ingredients: {ingredients.length}</h4>
                    <ul className="font_fira_sans font-normal text-[#878787]">
                        <li><span className="badge badge-xs bg-[#878787]"></span> {one}</li>
                        <li><span className="badge badge-xs bg-[#878787]"></span> {two}</li>
                        <li><span className="badge badge-xs bg-[#878787]"></span> {three}</li>
                    </ul>
                </div>

                <div className="flex items-center gap-6 font_fira_sans mb-6">
                    <p className="text-[#282828CC] font-normal"><i className="uil uil-clock-three"></i> {preparing_time}</p>
                    <p className="text-[#282828CC] font-normal"><i className="uil uil-fire"></i> {calories}</p>
                </div>

                <div>
                    <a onClick={() => handleCook(recipe)} className="btn text-xl font_lexend font-medium rounded-full text-[#150B2B] bg-[#0BE58A] border-none">Want to Cook</a>
                </div>
            </div>
        </div>
    );
};

export default RecipeCardSection;