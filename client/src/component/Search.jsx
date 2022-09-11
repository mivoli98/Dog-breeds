import React, { useEffect, useState } from 'react';
import '../Styles/search.css';

const Search = () => {
    const [backendData, setBackendData] = useState([{}])
    const [images, setImages] = useState([{}])
    const [searchTerm, setSearchTerm] = useState("")
    const [isSelected, setSelected] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3011").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data.message)
            }
        )
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3011/breed/${searchTerm}/images`).then(
            response => response.json()
        ).then(
            data => {
                setImages(data.message)
            }
        )
    }, [searchTerm])

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
        setSelected(true)
    }

  return (
    <div className="searchBar" id="search">

        <div className="find-dog">
          <h2> Let's Help <span>You</span> Find <span>Your Dog Breed</span>  </h2>
        </div>
        <div>
        <select className="form-select form-select-lg mb-3"
            value={searchTerm}
            onChange={handleOnChange}>
                {!searchTerm && <option value="" >Choose a dog breed</option>}
            
            {Object.keys(backendData).map((val, key) => {
                return <option key={key}>{val}</option>   
            })}
        </select>
        </div>
        

        {isSelected && 
            <div className="maylike-products-wrapper">
            <div className="marquee">
                <div className="maylike-products-container track">
                    {Object.values(images).map((image, i) => (
                        <div className="image-wrapper" key={i}>
                            <img 
                            src={image} 
                            alt={`pic-${i}`} 
                            />
                        </div>     
                     ))}
                </div>
            </div>
        </div>
        }
    </div>
  )
}

export default Search
