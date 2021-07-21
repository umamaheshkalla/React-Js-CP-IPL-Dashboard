import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamsList} = props
  const {id, name, teamImageUrl} = teamsList

  return (
    <Link className="nav-link" to={`/team-matches/${id}`}>
      <div className="card">
        <img className="team-logo" alt="team-logo" src={teamImageUrl} />
        <h1 className="team-name">{name}</h1>
      </div>
    </Link>
  )
}

export default TeamCard
