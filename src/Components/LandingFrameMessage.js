import LandingPageButton from "./LandingPageButton"

function LandingFrameMessage() {
    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
    }
    return <div style={style}>
        
        <div style={{"font-size": "96px"}}>
            Hello World!!
        </div>
        
        <div style={{"font-size": "36px"}}>
            This is the landing page and here's some content.
            How much wood would a woodchuck chuck if a 
            woodchuck would chuck wood?
        </div>
        <br />
        <LandingPageButton />
    </div>
}
export default LandingFrameMessage;