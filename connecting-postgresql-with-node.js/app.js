import { poolDemo, clientDemo } from "./connect2.js";

poolDemo()
    .then((result) => {
        console.log(result.rows)
    })