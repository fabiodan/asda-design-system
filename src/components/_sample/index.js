// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import Button from '@asda/button'

// Assets
import './_style.scss'

const Component = ({ children }) => (
  <p className="sample__paragraph">{children}</p>
)

const Sample = ({
  className,
  color,
  hidden,
}) => {
  const modifiers = [
    !!color && `sample--${color}`,
    hidden && 'sample--hidden',
  ]
  const classNames = joinClassNames('sample', className, modifiers)

  return (
    <div className={classNames}>
      <Button>Click Here</Button>
      <Component>Lorem Ipsum</Component>
    </div>
  )
}

export default Sample