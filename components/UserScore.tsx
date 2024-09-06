import React from 'react'

const UserScore = ({
  vote_average,
  size = 'small',
}: {
  vote_average: number
  size?: 'small' | 'medium' | 'large'
}) => {
  const userVotePercentage = Math.round(vote_average * 10)
  let ringColor = 'lime-500'
  if (userVotePercentage < 50) ringColor = 'red-500'
  if (userVotePercentage >= 50 && userVotePercentage < 70)
    ringColor = 'amber-500'
  if (userVotePercentage >= 70) ringColor = 'lime-500'

  let classes = ''
  if (size === 'large') {
    classes = 'text-3xl  h-36 w-36'
  } else if (size === 'medium') {
    classes = 'text-2xl h-24 w-24'
  } else {
    classes = 'text-xs h-10 w-10'
  }

  return (
    <div
      className={`user-score relative ${classes} text-${ringColor} rounded-full bg-black/35`}
    >
      <svg
        className="bg absolute left-0 top-0 h-full w-full"
        viewBox="0 0 48 48"
        style={{ '--progress': 1 } as any}
      >
        <circle cx="24" cy="24" r="20"></circle>
      </svg>
      <svg
        className="absolute left-0 top-0 h-full w-full"
        viewBox="0 0 48 48"
        style={{ '--progress': userVotePercentage / 100 } as any}
      >
        <circle cx="24" cy="24" r="20"></circle>
      </svg>
      <span>{userVotePercentage}%</span>
      <span className="color-definition hidden text-amber-500 sm:text-red-500"></span>
      <span className="color-definition hidden text-red-500"></span>
    </div>
  )
}

export default UserScore
