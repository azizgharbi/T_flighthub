import React, { useState, useEffect } from 'react'
import { getInfos } from '../Services'
// Style
import { Loader, ElementStyle } from '../styles'

const Planet = ({ planetUrl }) => {
  const [planet, setPlanet] = useState(null)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    async function fetchData () {
      const { name, created } = await getInfos(planetUrl)
      setPlanet({ name, created })
      setLoader(false)
    }

    fetchData()
  }, [])
  return (
      <ElementStyle>
        {loader
          ? (
          <Loader size={'5px'} />
            )
          : (
          <div className="tooltip">
            {planet.name}
            <span className="tooltiptext">Created:{planet.created}</span>
          </div>
            )}
      </ElementStyle>
  )
}

export default Planet
