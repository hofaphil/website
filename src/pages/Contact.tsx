import { HOME } from '../App';
import './Contact.css';

export default function Contact() {
  return (
    <div className="text-white">
      <div className="card bg-black text-center m-4">
        <div>
          <a className="btn bg-black" href={HOME}>
            <i className="text-white heading bi bi-arrow-left"></i>
          </a>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="card border-white bg-black p-4 m-4 card-style">
          <div className="card-body text-white p-0">
            <h1>Contact</h1>
            <p>
              Philipp Hofer <br />
              Schillstraße 80A <br />
              86167 Augsburg <br />
              Germany
            </p>
            <p>
              Phone: 01719141970 <br />
              Mail: contact@philipphofer.de
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}