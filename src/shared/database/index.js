  
import { createElement } from 'react'
import PropTypes from 'prop-types'

const withDatabase = Target => {
  const WithDatabase = (props, context) =>
    createElement(
      Target,
      Object.assign(
        {},
        { ...props, 'data-test-id': 'child-component' },
        {
          socket: context.socket,
        }
      )
    )

  SocketConsumer.contextTypes = {
    socket: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  }

  return SocketConsumer
}

export default withDatabase