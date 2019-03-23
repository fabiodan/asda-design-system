// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Assets
import './_style.scss'

const Browse = () => (
  <path d="m19 12 8 8h-3.5s1.8123269 3.3495845 2.5 5c.1456602.3495845-.0748975.8005886-.3979492.9454346-.3230517.1448459-.8751221.1448459-1.1612549-.2463379l-2.4407959-4.6990967-3 3zm-13 8h10c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-10c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm0-7h10c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-10c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm0-7h18c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-18c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" />
)

const Menu = () => (
  <path d="m7 7h18c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-18c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 8h9c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-9c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm0 8h15c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-15c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1z" />
)

const Plus = () => (
  <path d="m17 15h5c1 0 2 0 2 1s-1 1-2 1h-5v5c0 1 0 2-1 2s-1-1-1-2v-5h-5c-1 0-2 0-2-1s1-1 2-1h5v-5c0-1 0-2 1-2s1 1 1 2z" />
)

const Minus = () => (
  <path d="m9 15h14c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1z" />
)

const ChevronDown = () => (
  <path d="m23.3296881 10.8115135c.0339314-.0422068.070482-.0830039.1096517-.1221737.5857865-.5857864 1.5355339-.5857864 2.1213204 0 .5857864.5857865.5857864 1.5355339 0 2.1213204-.0391698.0391697-.0799669.0757203-.1221737.1096517l.0010084.0010084-7.5107713 7.5107714c-.2383749.2552502-.5255013.5531151-.8680634.8998888-.5857865.5857865-1.5355339.5857865-2.1213204 0-.2319143-.2378521-.4352933-.4506632-.6127476-.6409031l-.0084176.0084175-7.7781746-7.7781746.01019682-.0101968c-.03819152-.0313171-.07519858-.0648049-.11085699-.1004633-.58578644-.5857865-.58578644-1.5355339 0-2.1213204.58578644-.5857864 1.5355339-.5857864 2.12132034 0 .03565841.0356584.06914619.0726655.10046335.110857l7.32862398 7.3282303 7.3284271-7.3284271z" />
)

const Swap = () => (
  <path fill-rule="nonzero" d="m10 12h12zm1.2071068 7h11.7928932c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-11.7928932l1.2928932 1.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136s-1.0236893.3905243-1.4142136 0l-2.64644657-2.6464466c-.58578644-.5857865-.58578644-1.5355339 0-2.1213204l2.64644657-2.6464466c.3905243-.3905243 1.0236893-.3905243 1.4142136 0s.3905243 1.0236893 0 1.4142136zm9.3786796-8-1.2928932-1.29289322c-.3905243-.39052429-.3905243-1.02368927 0-1.41421356s1.0236893-.39052429 1.4142136 0l2.6464466 2.64644658c.5857864.5857865.5857864 1.5355339 0 2.1213204l-2.6464466 2.6464466c-.3905243.3905243-1.0236893.3905243-1.4142136 0s-.3905243-1.0236893 0-1.4142136l1.2928932-1.2928932h-11.5857864c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1z"/>
)

const Icon = ({
  className, color, name, size,
}) => {
  const modifiers = [
    !!color && `icon--${color}`,
    !!size && `icon--${size}`,
  ]
  const classNames = joinClassNames('icon', className, modifiers)

  const icons = {
    'browse': Browse,
    'menu': Menu,
    'plus': Plus,
    'minus': Minus,
    'chevron-down': ChevronDown,
    'swap': Swap,
  }

  const IconPath = icons[name]

  return (
    <span className={classNames}>
      <svg className="icon__svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <IconPath />
      </svg>
    </span>
  )
}

Icon.defaultProps = {
  color: 'charcoal',
  size: 'medium',
}

export { Icon as default }
