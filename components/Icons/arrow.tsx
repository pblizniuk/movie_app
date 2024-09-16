import { type IconProps } from './index'

const Arrow = (props: IconProps) => {
  const { className, ...additionalProps } = props
  return (
    <svg
      {...additionalProps}
      className={className}
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  )
}

export default Arrow
