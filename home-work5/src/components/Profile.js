import { ThemeContext } from "../App";
import { useContext } from "react";

function Profile() {
    const theme = useContext(ThemeContext);
    return (
        <div className={theme}>
            <h2>Profile</h2>
            <p>Some text</p>
        </div>

    );
}

export default Profile;