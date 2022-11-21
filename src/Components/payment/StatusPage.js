import Nav3 from "./Navbar";
import "./StatusPage.css"
import StatusCard from "./StatusCard";
import { useSelector } from 'react-redux'

function StatusPage(){

    const paymentStatus = useSelector((state) => state.app.paymentStatus);

    // return(<body id="paypage"><Nav3/>
    // <div className="stpage">
    // <div className="statusbox">Status : {paymentStatus.currentStatus}</div>
    // </div>
    // </body>)

    return(<body id="paypage"><Nav3/>
    <div className="stpage">
        <StatusCard status={paymentStatus.currentStatus}></StatusCard>
    </div>
    </body>)
}

export default StatusPage;