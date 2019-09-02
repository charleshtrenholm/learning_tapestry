import React from 'react';
import ReactDOM from 'react-dom';
import EditTable from  './EditTable';
import { shallow, mount } from 'enzyme';



it('renders without crashing', () => {
    shallow(<EditTable />);
});

it('has default state values', () => {
    const wrapper = shallow(<EditTable />);
    expect(wrapper.state().edits).toEqual([]); // expect empty array
    expect(typeof wrapper.state().edits).toEqual('array'); // expect type array, for typescript implementation
    expect(typeof wrapper.state().startTime).toEqual('object'); // expect Date to be type object
    expect(wrapper.state().pageSize).toEqual(50); // expect value for page size
    expect(wrapper.state().sortBy).toEqual('newer'); // expect value for sortby techique
});

it('calls wiki API without errors', async () => {
    const now = new Date();
    const url = `https://en.wikipedia.org/w/api.php?` +
    `&origin=*&action=query&list=recentchanges&format=json&rcstart=${now.toISOString()}` + 
    `&rcprop=title|ids|user|userid|comment|parsedcomment|loginfo|tags` +
    `&rcnamespace=0&rcshow=!minor%7C!bot%7C!anon%7C!redirect&rclimit=50&rcdir=newer`
    
    const res = await fetch(url);

    expect(res.status).toEqual(200); // expect success code
})