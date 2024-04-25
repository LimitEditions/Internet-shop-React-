import Footer from "./Footer";
import Header from "./Header";
import Profile from "./Profile";

function IsLoadingIndicator({isLoad}) {
    return (  
        <>
            {isLoad && (
                <embed src="../FKLT.gif" type="image/gif" />)}
            {!isLoad && (<><Header/> <Profile/> <Footer/> </>) }
        </>
    );
}

export default IsLoadingIndicator;