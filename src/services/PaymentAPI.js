

export function callPaymentAPI(payload) {

    return fetch(
        `http://localhost:8080/payment`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        }
    ).then((data) => data.json());
}