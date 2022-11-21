const header = new Headers({ "Access-Control-Allow-Origin": "*" });
export function callStatusAPI(transactionId) {

    return fetch(
        `/transaction/${transactionId}`, { header: header }
    ).then((data) => data.json());
}