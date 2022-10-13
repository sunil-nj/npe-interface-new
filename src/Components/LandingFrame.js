
import LandingFrameMessage from "./LandingFrameMessage"
function LandingFrame() {
    const style = {
        "background-image": `url("/Images/pexels-mikhail-nilov-6969809.jpg")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }
    return <div style={style}>
        <LandingFrameMessage />
    </div>
}
export default LandingFrame;