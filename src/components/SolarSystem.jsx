import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

export default class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <div className="planetas">
          <Title headline="Planetas" />
        </div>
        <div className="allPlanets">
          { planets.map(({ name, image }) => (<PlanetCard
            key={ name }
            planetImage={ image }
            planetName={ name }
          />))}
        </div>
      </div>
    );
  }
}
