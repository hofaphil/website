import { CONTACT, HOME } from '../App';
import Button from '../components/button';
import DropdownButton from '../components/dropdown/dropdownButton';
import DropdownItem from '../components/dropdown/dropdownItem';
import './Home.css';

export default function Home() {
  return (
    <div className="m-5 pt-lg-5 card bg-black text-center">
      <div>
        <span className="badge bg-primary">@hofaphil</span>
      </div>
      <div>
        <a className="btn bg-black" href={HOME}>
          <img className="img-fluid programmer-img" src="img/icon.png" alt="programmer-emoji" />
        </a>
      </div>
      <h1 className="card-text text-white heading mt-5">Hi, I am Phil.</h1>
      <h2 className="text-white mb-5">I am addicted to programming.</h2>

      <div className="d-grid d-md-block">
        <Button text="GitHub" link="https://github.com/hofaphil" icon="bi-github" blank />

        <DropdownButton text="Sudoku Expert" icon="bi-dpad">
          <DropdownItem text="Android" link="https://play.google.com/store/apps/details?id=com.aol.philipphofer" icon="bi-android" blank />
          <DropdownItem text="iOS" link="https://apps.apple.com/app/sudoku-expert/id1641677021" icon="bi-apple" blank />
        </DropdownButton>

        <Button text="Contact" link={CONTACT} icon="bi-person-circle" />
      </div>
    </div>
  )
}