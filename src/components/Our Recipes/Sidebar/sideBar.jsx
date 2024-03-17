const SideBar = ({ selectedRecipe, currentlyCooking, handlePreparing }) => {
    const totalPreparationTime = currentlyCooking.reduce((acc, curr) => acc + parseInt(curr.preparing_time), 0);
    const totalCalories = currentlyCooking.reduce((acc, curr) => acc + parseInt(curr.calories), 0);

    return (
        <div>
            <div className="border-2 border-gray-300 rounded-xl">
                <div className="py-6">
                    <h3 className="font-medium text-2xl text-center mb-4">Want to cook: {selectedRecipe.length}</h3>
                    <hr />
                    <div className="overflow-x-auto">
                        <table className="table font_fira_sans text-[#282828B3]">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* rows */}
                                {selectedRecipe.map((item) => (
                                    <tr className="bg-base-200" key={item.recipe_id}>
                                        <th>{item.recipe_id}</th>
                                        <td>{item.recipe_name}</td>
                                        <td>{item.preparing_time}</td>
                                        <td>{item.calories}</td>
                                        <td>
                                            <button onClick={() => handlePreparing(item)} className="btn text-xl font_lexend font-medium rounded-full text-[#150B2B] bg-[#0BE58A] border-none">Preparing</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="border-2 border-gray-300 rounded-xl mt-6">
                <div className="py-6">
                    <h3 className="font-medium text-2xl text-center mb-4">Currently cooking: {currentlyCooking.length}</h3>
                    <hr />
                    <div className="overflow-x-auto">
                        <table className="table font_fira_sans text-[#282828B3]">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* rows  */}
                                {currentlyCooking.map((item) => (
                                    <tr className="bg-base-200" key={item.recipe_id}>
                                        <th>{item.recipe_id}</th>
                                        <td>{item.recipe_name}</td>
                                        <td>{item.preparing_time}</td>
                                        <td>{item.calories}</td>
                                    </tr>
                                ))}
                                {/* Total row */}
                                <tr>
                                    <th></th>
                                    <td></td>
                                    <td>Total Time = {totalPreparationTime} minutes</td>
                                    <td>Total Calories = {totalCalories} calories</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;