import { NavLink } from 'react-router-dom';
import classes from './EventNavigation.module.css';

function EventNavigation() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="/events">All Events</NavLink>
        </li>
        <li>
          <NavLink to="/events/new">New Event</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default EventNavigation;
