

export function callPaymentAPI(payload) {

    return fetch(
        `/payment`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        }
    ).then((data) => data.json());
}