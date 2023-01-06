import React from 'react';
import { useLocation } from 'react-router-dom';
import Badge from '../components/badge';
import './Share.css';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Share() {
  const id = useQuery().get("id");

  return (
    <div>
      <div className="row justify-content-md-center m-4">
        <div className="col-auto">
          <a className="btn bg-black text-white" href="/">
            <img className="img-fluid hw-12" src="/img/icon.png" alt="programmer-emoji"/>
              <h1 className="ms-2 align-middle display-inline">Philipp Hofer</h1>
          </a>
        </div>
      </div>

      <div className="card text-center border-dark p-3 m-3">
        <div className="row align-items-center">
          <div className="col-md-auto">
            <img className="img-fluid" src="/img/logo.png" alt="logo"/>
          </div>
          <div className="col">
            <h1 className="mt-5">Sudoku Expert</h1>
            <h4 className="mt-3 mb-5">Play free and unlimited Sudoku!</h4>
            
            <Badge link="http://play.google.com/store/apps/details?id=com.aol.philipphofer" src="/img/google-badge.png" alt="get the app for android"/>
            <Badge link="https://apps.apple.com/app/sudoku-expert/id1641677021" src="/img/apple-badge.png" alt="get the app for apple"/>

            <div className="mx-auto m-5 max-width-25">
              <a className="btn bg-black text-white" href={"hofer.sudoku.expert://?id=" + id}>
                I already have the Sudoku app
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}