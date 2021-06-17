import Search from '../../components/Search/Search.components';

import './introPage.styles.scss';

function IntroPage() {
    return (
        <div className="welcome_screen">
            <h1 className="logo logo--welcome_screen">Weather-Check</h1>
            <h2>Please type in city name</h2>
            <div>
                <Search />
            </div>  
        </div>
    )
};

export default IntroPage;