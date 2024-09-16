'use client'

import { useFormStatus } from 'react-dom'
import { useEffect, type ComponentProps } from 'react'
import { toast } from 'react-hot-toast'

type Props = ComponentProps<'button'> & {
  pendingText?: string
}

export function WishlistButtonClient({
  children,
  pendingText,
  ...props
}: Props) {
  const { pending, action } = useFormStatus()
  const isPending = pending && action === props.formAction
  const isSuccess = !pending && action === props.formAction

  const handleClick = () => {
    toast.success('Added to wishlist')
  }
  useEffect(() => {
    if (isSuccess) {
      toast.success('Added to wishlist')
    }
  }, [isSuccess])

  return (
    <>
      <button {...props} type="submit" aria-disabled={pending}>
        {isPending ? pendingText : children}
      </button>
      <button onClick={handleClick} type="button" aria-disabled={pending}>
        test
      </button>
    </>
  )
}
