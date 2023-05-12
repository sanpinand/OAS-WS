export function getDataCalls(req, res) {
    res.send([
        {
            province: "Málaga",
            month: "january",
            year: 1234
        }
    ]);
}



export function findByprovince(req, res) {
    res.send({
        province: "Málaga",
        month: "january",
        year: 1234
 });
}

