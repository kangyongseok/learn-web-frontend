interface Citizen {
    name: string;
    readonly SSN: number;
}

let personObj: Citizen = {SSN: 110555444, name: "Codereading"}
personObj.name = "Kang";
personObj.SSN = 1234566777;