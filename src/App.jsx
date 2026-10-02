import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [event, setEvent] = useState("");
  const [message, setMessage] = useState("");

  const isValidForm =
    name &&
    email &&
    phone &&
    event &&
    message;

  function handleSubmit(event) {
    event.preventDefault();

    setName("");
    setEmail("");
    setPhone("");
    setEvent("");
    setMessage("");

    alert("Event Registration Successful!");
  }

  return (
    <div className="container">
      <div className="form-box">

        <h1>Event Registration</h1>
        <p className="description">
          Register for your favorite event
        </p>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <p>
            {name.length < 3 &&
              name.length !== 0 &&
              "Invalid Name"}
          </p>

          <p>
            {name.length > 30 &&
              "Invalid Name"}
          </p>


          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p>
            {email.length < 5 &&
              email.length !== 0 &&
              "Invalid Email"}
          </p>

          <p>
            {email.length > 40 &&
              "Invalid Email"}
          </p>

          <p>
            {!email.includes("@gmail.com") &&
              email.length !== 0 &&
              "Invalid Email"}
          </p>


          <label>Phone Number</label>

          <input
            type="number"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <p>
            {phone.length < 10 &&
              phone.length !== 0 &&
              "Invalid Phone Number"}
          </p>

          <p>
            {phone.length > 15 &&
              "Invalid Phone Number"}
          </p>


          <label>Event Name</label>

          <input
            type="text"
            placeholder="Enter event name"
            value={event}
            onChange={(e) => setEvent(e.target.value)}
          />

          <p>
            {event.length < 3 &&
              event.length !== 0 &&
              "Invalid Event Name"}
          </p>

          <p>
            {event.length > 40 &&
              "Invalid Event Name"}
          </p>


          <label>Message</label>

          <textarea
            placeholder="Write your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <p>
            {message.length < 10 &&
              message.length !== 0 &&
              "Invalid Message"}
          </p>

          <p>
            {message.length > 200 &&
              "Invalid Message"}
          </p>


          {isValidForm && (
            <input
              type="submit"
              value="Register Now"
            />
          )}

        </form>
      </div>
    </div>
  );
}