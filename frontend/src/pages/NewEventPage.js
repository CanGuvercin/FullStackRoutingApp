function NewEventPage() {
  return (
    <div>
      <h1>Create a New Event</h1>
      <form>
        <label>
          Event Name:
          <input type="text" name="eventName" />
        </label>
        <br />
        <label>
          Date:
          <input type="date" name="eventDate" />
        </label>
        <br />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}

export default NewEventPage;