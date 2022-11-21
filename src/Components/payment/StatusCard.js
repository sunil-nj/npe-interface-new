import "./StatusPage.css";

function StatusCard(props) {

    const status = props.status

    if (status === "SUCCESS") {
        return (
            <div className="statusbox1">
                <div className="checkBox">
                    <div className="check">&#x2713;</div>
                </div>
                <div className="status">Status : {status}</div>
            </div>
        )
    }
    else if(status==="PENDING"){
        
        return (
            <div className="statusbox3">
                <div className="checkBox">
                    <div className="check">&#x21bb;</div>
                </div>
                <div className="status">Status : {status}</div>
            </div>
        )

    }
    else if (status==="INITIATED"){
        
        return (
            <div className="statusbox4">
                <div className="checkBox">
                    <div className="check">&#x2026;</div>
                </div>
                <div className="status">Status : {status}</div>
            </div>
        )
    }


    return (
        <div className="statusbox2">
            <div className="checkBox">
                <div className="check">&#x2717;</div>
            </div>
            <div className="status">Status : {status}</div>
        </div>
    )
}

export default StatusCard;
