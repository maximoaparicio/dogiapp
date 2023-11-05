import { useState, useEffect } from 'react'
import axios from 'axios'

function CatsRendering() {
  const [dogs, setDogs] = useState([])

  const getDogs = async () => {
    const response = await axios.get(
      'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_Xz1OngLJ1wBLpXkiGlRjZls7smEuBWMEuL4C4zlR6tojuwm8lySxR9itYsxcu7c1'
    )

    setDogs(response.data)
  }

  useEffect(() => {
    try {
      getDogs()
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
      {dogs.map((dog) => (
        <div
          key={dog.id}
          className="p-2 bg-[#BF9270] rounded shadow cursor-pointer"
        >
          <img
            src={dog.url}
            alt={`Dog ${dog.id}`}
            className="w-full h-[200px] object-cover"
          />
          <div className="h-4 p-4 flex items-center justify-center">
            <h3 className=" font-bold text-white">RAZA</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CatsRendering
