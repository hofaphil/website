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
        <h1 className="card-text heading">Contact</h1>
      </div>

      <div className="d-flex justify-content-center">
        <div className="card border-white bg-black p-4 p-md-5  card-style">
          <div className="card-body">
            <h1>Impressum</h1>
            <h2>Angaben gemäß 5 TMG</h2>
            <p>
              Philipp Hofer <br />
              Ortlerstrasse 82 <br />
              86163 Augsburg
            </p>
            <h2>Kontakt</h2>
            <p>
              Telefon: 01719141970 <br />
              E-Mail: contact@philipphofer.de
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}