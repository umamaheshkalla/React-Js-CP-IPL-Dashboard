import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = recentMatch

  return (
    <div className="recent-match-card ">
      <img
        className="recent-match-logo"
        alt="team-logo"
        src={competingTeamLogo}
      />
      <p className="recent-match-content">{competingTeam}</p>
      <p className="recent-match-content">{matchStatus}</p>
      <p className="recent-match-content">{result}</p>
    </div>
  )
}

export default MatchCard
