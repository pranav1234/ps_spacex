import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jsdom-global/register'; //at the top of file , even  , before importing react
import Filters from '../Launch/Filters';
import { ServerDataProvider } from '../../state/serverDataContext';
import '@testing-library/jest-dom';
import { expect } from 'chai';

describe('renders <Filter /> properly', () => {
  const mockCallBack = jest.fn();

  const wrapped = mount(
    <Filters
      onYearSearch={mockCallBack}
      selectedYear={2008}
      isLaunchSuccessFilter={true}
    />
  );
  it('should render Filters component ', () => {
    expect(wrapped.find('Filters')).to.have.lengthOf(1);
  });
  it('should render 17 buttons for filters  ', () => {
    expect(wrapped.find('button')).to.have.lengthOf(17);
  });
  it('selected year should be disabled', () => {
    expect(wrapped.find('button').at(2)).to.be.disabled();
  });
  it('selected call onClick on filter selection', () => {
    wrapped
      .find('button')
      .at(1)
      .simulate('click');
    expect(mockCallBack.mock.calls.length).equal(1);
  });
});
