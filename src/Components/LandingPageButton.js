import {Link} from "react-router-dom"
function LandingPageButton() {
    return <Link to="/about" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px"}}>
                Click Me!
            </span>
        </button>
    </Link>
}
export default LandingPageButton;