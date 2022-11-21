const header = new Headers({ "Access-Control-Allow-Origin": "*" });
export function callAccountDetailsAPI(accountId) {

    return fetch(
        `/accountDetails?accountId=${accountId}`, { header: header }
    ).then((data) => data.json());
}