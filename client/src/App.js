import './App.scss';
import pageErrorImg from './media/Scarecrow.png';

function App() {
  return (
    <>
        <div className="header">
            <div className="header-container container">
                <h1 className="title">404 NOT FOUND</h1>
            </div>
        </div>
        <main className="content-component">
            <div className="content-container container">
                <div className="img-wrapper">
                    <img src={pageErrorImg} alt="404 Scarecrow Image Error" className="img"/>
                </div>
                <div className="details-wrapper">
                    <h2 className="title">I have bad news for you</h2>
                    <p className="details">
                        The page you are looking for might be removed or is temporarily unavailable
                    </p>
                    <a href="#" className="button primary">BACK TO HOMEPAGE</a>
                </div>
            </div>
        </main>
        <footer className="footer">
            <div className="footer-container container">
                <span className="copyright">
                    created by <u><strong>tasca-eduard</strong></u> - devChallenges.io
                </span>
            </div>
        </footer>
    </>
  );
}

export default App;
