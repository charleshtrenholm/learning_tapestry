import React from 'react';
import './NavBar.css';
import TimePicker from 'react-time-picker';

function NavBar({ onSortByChange, onStartTimeChange, onPageSizeChange }) {

    return(
        <div className="row top-nav">
            <div className="col-4">
                <label htmlFor="sortby">Sort By</label>
                <select 
                    name="sortby" 
                    className="form-control" 
                    onChange={$event => onSortByChange($event.target.value)}
                    >
                    <option value="newer">newer</option>
                    <option value="older">older</option>
                </select>
            </div>
            <div className="col-4">
                <label htmlFor="starttime">Start Time</label>
                <TimePicker
                    maxTime={new Date()}
                    clearIcon="clear"
                    name="starttime"
                    className="form-control"
                    onChange={$event => onStartTimeChange($event)}
                    disableClock={true}
                />
            </div>
            <div className="col-4">
                <label htmlFor="maxpagesize">Max Page Size</label>
                <select
                    name="maxpagesize"
                    className="form-control"
                    onChange={$event => onPageSizeChange($event.target.value)}
                    value="50"
                >
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="150">150</option>
                    <option value="200">200</option>
                    <option value="250">250</option>
                    <option value="300">300</option>
                </select>
            </div>
        </div>
    );
} 

export default NavBar;