import React from 'react'

const MEALS = [
  {description: 'Breackfast', Calories: 460},
  {description: 'Snack', Calories: 180},
  {description: 'Lunch', Calories: 600}
]


const Demo = () => {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css" />
      <div className="sans-serif bg-white pa3">
        <table className="mw5 center w-100 collapse">
            <thead>
                <tr>
                    <th className="pa2 tl">Meal</th>
                    <th className="pa2 tr">Calories</th>
                </tr>
            </thead>
            <tbody>
                <tr className="stripe-dark">
                    <td className="pa2">Breakfast</td>
                    <td className="pa2 tr">460</td>
                </tr>
                <tr className="stripe-dark">
                    <td className="pa2">Snack</td>
                    <td className="pa2 tr">180</td>
                </tr>
                <tr className="stripe-dark">
                    <td className="pa2">Lunch</td>
                    <td className="pa2 tr">600</td>
                </tr>
            </tbody>
        </table>
      </div>
    </>
  )
}

export default Demo
