

const header = new Headers({ "Access-Control-Allow-Origin": "*" });
export function callUserDetailsAPI(name) {

    return fetch(
        `/userDetails?customerId=${name}`, { header: header }
    ).then((data) => data.json());
}