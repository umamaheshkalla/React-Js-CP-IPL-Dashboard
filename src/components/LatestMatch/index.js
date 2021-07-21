import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    matchStatus,
    result,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="latest-match-content-container">
        <p className="latest-match-content">{competingTeam}</p>
        <p className="latest-match-content">{date}</p>
        <p className="latest-match-content">{venue}</p>
        <p className="latest-match-content">{result}</p>
        <p className="latest-match-content">{matchStatus}</p>
      </div>
      <div className="latest-match-content-container">
        <img
          className="competing-logo"
          alt="competing-logo"
          src={competingTeamLogo}
        />
      </div>
      <div className="latest-match-content-container">
        <p className="latest-match-content-headings">First Innings</p>
        <p className="latest-match-content">{firstInnings}</p>
        <p className="latest-match-content-headings">Second Innings</p>
        <p className="latest-match-content">{secondInnings}</p>
        <p className="latest-match-content-headings">Man Of The Match</p>
        <p className="latest-match-content">{manOfTheMatch}</p>
        <p className="latest-match-content-headings">Umpires</p>
        <p className="latest-match-content">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
