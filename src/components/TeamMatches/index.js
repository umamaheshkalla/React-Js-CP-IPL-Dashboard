import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamImg: {},
    latestMatchDetails: {},
    teamName: '',
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamCardDetailsList()
  }

  getTeamCardDetailsList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const teamNameId = id
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedTeamImg = {
      teamBannerUrl: data.team_banner_url,
    }
    const getMatchDetails = data.latest_match_details
    const updatedLatestMatchDetails = {
      umpires: getMatchDetails.umpires,
      competingTeam: getMatchDetails.competing_team,
      competingTeamLogo: getMatchDetails.competing_team_logo,
      date: getMatchDetails.date,
      firstInnings: getMatchDetails.first_innings,
      id: getMatchDetails.id,
      manOfTheMatch: getMatchDetails.man_of_the_match,
      matchStatus: getMatchDetails.match_status,
      result: getMatchDetails.result,
      secondInnings: getMatchDetails.second_innings,
      venue: getMatchDetails.venue,
    }
    const getRecentMatchDetails = data.recent_matches
    const updatedRecentMatchDetails = getRecentMatchDetails.map(eachItem => ({
      umpires: eachItem.umpires,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      venue: eachItem.venue,
    }))
    this.setState({
      teamImg: updatedTeamImg,
      latestMatchDetails: updatedLatestMatchDetails,
      teamName: teamNameId,
      recentMatches: updatedRecentMatchDetails,
      isLoading: false,
    })
  }

  render() {
    const {
      teamImg,
      latestMatchDetails,
      teamName,
      recentMatches,
      isLoading,
    } = this.state
    const {teamBannerUrl} = teamImg

    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`${teamName}-card-container`}>
            <img className="team-card-img" alt="team-img" src={teamBannerUrl} />
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <div className="bg-container">
              {recentMatches.map(eachItem => (
                <MatchCard recentMatch={eachItem} key={eachItem.id} />
              ))}
            </div>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
