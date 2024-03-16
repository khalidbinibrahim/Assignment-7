const SideBar = ({ selectedRecipe }) => {
    return (
        <div>
            <div className="border-2 border-gray-300 rounded-xl">
                <div className="py-6">
                    <div className="font_lexend">
                        <h3 className="font-medium text-2xl text-center mb-4">Want to cook: {selectedRecipe.length}</h3>
                    </div>
                    <hr />
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table font_fira_sans text-[#282828B3]">
                                {/* head */}
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
                                    {
                                        selectedRecipe.map((item) => (
                                            <tr className="bg-base-200" key={item.recipe_id}>
                                                <th>{item.recipe_id}</th>
                                                <td>{item.recipe_name}</td>
                                                <td>{item.preparing_time}</td>
                                                <td>{item.calories}</td>
                                                <td>
                                                    <button className="btn text-xl font_lexend font-medium rounded-full text-[#150B2B] bg-[#0BE58A] border-none">Preparing</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="font_lexend">
                        <h3 className="font-medium text-2xl text-center my-4">Currently cooking: 02</h3>
                    </div>
                    <hr />
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table font_fira_sans text-[#282828B3]">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr className="bg-base-200">
                                        <th>1</th>
                                        <td>Chicken Caesar Salad</td>
                                        <td>20 minutes</td>
                                        <td>400 calories</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr className="bg-base-200">
                                        <th>2</th>
                                        <td>Chicken Caesar Salad</td>
                                        <td>20 minutes</td>
                                        <td>400 calories</td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td></td>
                                        <td>Total Time = 45 minutes</td>
                                        <td>Total Calories = 1050 calories</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;