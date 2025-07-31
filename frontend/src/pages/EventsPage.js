import { Link } from "react-router-dom";

function EventsPage() {

  const events = [
    { id: 'e1', title: 'React Workshop' },
    { id: 'e2', title: 'JavaScript Bootcamp' },
    { id: 'e3', title: 'Fullstack Meetup' },
  ];

  return (
    <div>
      <h1>All Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsPage;