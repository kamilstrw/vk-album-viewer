import React from 'react';
const vkContext = React.createContext();

export function withVK(Component) {
  return function VKComponent(props) {
    return (
      <vkContext.Consumer>
        {vk => <Component {...props} vk={vk} />}
      </vkContext.Consumer>
    );
  };
}

export default vkContext;