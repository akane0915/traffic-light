import React from 'react';
import ReactDOM from 'react-dom';
import { unmountComponentAtNode } from 'react-dom';

import { shallow } from 'enzyme';

import { render, fireEvent, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  // describe('ReacDOM', () => {
  //   it('renders using ReactDOM', () => {
  //     const container = document.createElement('div');
  //     document.body.appendChild(container);
  //     ReactDOM.render(<App />, container);

  //     expect(container.textContent).toContain(
  //       'Click on the traffic light to activate a random light!'
  //     );
  //   });
  // });

  // describe('Enzyme', () => {
  //   let appComponent;

  //   beforeEach(() => {
  //     appComponent = shallow(<App />);
  //   });

  //   it('renders using enzyme', () => {
  //     expect(appComponent.contains('Click on the traffic light to activate a random light!')).toEqual(true);
  //   });

  //   describe('lights', () => {
  //     it('does not have an "active" classname to start', () => {
  //       const topLight = appComponent.find('.top-light');
  //       expect(topLight.hasClass('active')).toEqual(false);
  //     });
  //   });
  // });

  describe('React Testing Library', () => {
    let myApp;

    beforeEach(() => {
      myApp = render(<App />);
    });

    it('renders using react testing library', () => {
      const { getByText } = myApp;
      expect(getByText('Click on the traffic light to activate a random light!')).toBeInTheDocument();
    });

    it('activates a light upon clicking traffic light', () => {
      fireEvent.click(screen.getByRole('button'));
    });
  });
});
