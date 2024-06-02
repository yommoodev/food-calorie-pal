import React from 'react'
import './ResultTable.css'

function ResultTable({ foods }) {
    return (
        <section>
            <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                        <tr>
                            <th>Calories</th>
                            <th>Serving Size (g)</th>
                            <th>Total Fat (g)</th>
                            <th>Total Protein (g)</th>
                            <th>Total Carbohydrates (g)</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                        {
                            foods.map((food) => 
                                <>
                                    <tr>
                                        <td>{food.calories}</td>
                                        <td>{food.serving_size_g}</td>
                                        <td>{food.fat_total_g}</td>
                                        <td>{food.protein_g}</td>
                                        <td>{food.carbohydrates_total_g}</td>
                                    </tr> 
                                </>
                                
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ResultTable