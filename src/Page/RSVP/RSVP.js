const RSVP = () => (
  <div>
    <h1>RSVP</h1>
    <div>
      <form>
        <input type="text" id="name" />
        <div className="radio-group">
          <p>Attending?</p>
          <div className="radio-item">
            <input type="radio" id="yes" name="attending" />
            <label for="yes">Yes</label>
          </div>
          <div className="radio-item">
            <input type="radio" id="no" name="attending" />
            <label for="no">No</label>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
);

export default RSVP;
