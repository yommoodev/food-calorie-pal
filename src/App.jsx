import { useState } from 'react'
import axios from 'axios'
import './App.css'
import ResultTable from './ResultTable'

function App() {
  const [food, setFood] = useState('')
  const [loader, setLoader] = useState(false)
  const [foodResult, setFoodResult] = useState([])

  console.log('food: ', food)

  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoader(true)

    await getFoodNutrition()


    setLoader(false)
  }

  const getFoodNutrition = async () => {
    const response = await axios.get(`https://api.calorieninjas.com/v1/nutrition?query=${food}`, {
        headers: {
          'X-Api-Key': 'fY5/Hp6VO9Vq63sb6DhJMg==gUuXSRB7fKhuF7RY'
        }
      }
    )

    setFoodResult(response.data.items)
  }

  return (
    <>
      <div className="form-control">
        <input className="input input-alt" value={food} placeholder="Type any food" type="text" onChange={e => setFood(e.target.value)}/>
        <span className="input-border input-border-alt"></span>
        <button type='submit' onClick={handleSubmit}> Click Me</button>
        
      </div>
      <div className='result'>
        {
          loader ? 
          <div class="spinner center">
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
            <div class="spinner-blade"></div>
          </div> : <ResultTable foods={foodResult}/>
        }
      </div>
    </>
    

  )
}

export default App
