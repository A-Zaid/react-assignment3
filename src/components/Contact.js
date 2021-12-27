export default function Contact({ closeModal }) {
  return (
    <section
      id="formPopup"
      className="modal-f"
      onClick={() => {
        // close modal when outside of modal is clicked
        closeModal();
      }}
    >
      <div
        className="modal__content"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <form>
          <h2>Contact me</h2>
          <input
            type="text"
            className="form-control space-bottom"
            id="formGroupFirstName"
            placeholder="First name"
            required
          />
          <input
            type="text"
            className="form-control space-bottom"
            id="formGroupLastName"
            placeholder="Last name"
            required
          />
          <input
            type="email"
            className="form-control space-bottom"
            id="formControlEmail"
            placeholder="name@example.com"
          />
          <textarea
            className="form-control space-bottom"
            id="formControlMessage"
            rows="3"
            placeholder="Message"
            required
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="btn__customize space-bottom space-top"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
