import movies from './movies'
import tv_shows from './tv_shows'
import wishlist from './wishlist'
import cross from './cross'
import user from './user'
import spinner from './spinner'
import loupe from './loupe'

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
      {name === 'movies' && movies({ ...props, ...sizing })}
      {name === 'tv_shows' && tv_shows({ ...props, ...sizing })}
      {name === 'wishlist' && wishlist({ ...props, ...sizing })}
      {name === 'cross' && cross({ ...props, ...sizing })}
      {name === 'user' && user({ ...props, ...sizing })}
      {name === 'spinner' && spinner({ ...props, ...sizing })}
      {name === 'loupe' && loupe({ ...props, ...sizing })}
    </>
  )
}

export default Icon
