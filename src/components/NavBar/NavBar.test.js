import  NavBar  from './NavBar';
import { mount, shallow } from 'enzyme';
import  TimePicker  from 'react-time-picker';
import React from 'react';
import { ReactDOM } from 'react-dom';

it('renders without crashing', () => {
    shallow(<NavBar />);
});

it('give valid time inputs', () => {
    const changeMock = jest.fn();
    const wrapper = shallow(<NavBar onStartTimeChange={changeMock} />);
    wrapper.find(TimePicker).simulate('change', {target: {value: '12:0000000'}});
    expect(changeMock).toBeCalledWith(null);
})