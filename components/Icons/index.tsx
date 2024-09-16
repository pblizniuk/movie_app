import arrow from './arrow'
import cross from './cross'
import loupe from './loupe'
import movies from './movies'
import spinner from './spinner'
import tv_shows from './tv_shows'
import user from './user'
import wishlist from './wishlist'

export type IconProps = {
  name: string
  color?: string
  size?: string
  className?: string
  width?: string
  height?: string
  strokeWidth?: string
  stroke?: string
  fill?: string
  viewBox?: string
  style?: React.CSSProperties
}

const Icon = (props: IconProps) => {
  const { width, height, size, name } = props
  const sizing = size ? { width: size, height: size } : { width, height }

  return (
    <>
      {name === 'arrow' && arrow({ ...props, ...sizing })}
      {name === 'cross' && cross({ ...props, ...sizing })}
      {name === 'loupe' && loupe({ ...props, ...sizing })}
      {name === 'movies' && movies({ ...props, ...sizing })}
      {name === 'spinner' && spinner({ ...props, ...sizing })}
      {name === 'tv_shows' && tv_shows({ ...props, ...sizing })}
      {name === 'user' && user({ ...props, ...sizing })}
      {name === 'wishlist' && wishlist({ ...props, ...sizing })}
    </>
  )
}

export default Icon
