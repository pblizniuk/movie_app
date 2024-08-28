import { type IconProps } from './index'

const User = (props: IconProps) => {
  const { className, ...additionalProps } = props
  return (
    <svg
      {...additionalProps}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="6" r="4" fill="currentColor" />
      <path
        opacity="0.5"
        d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default User
