var WushuStudent = /** @class */ (function () {
    function WushuStudent(name, age, city, role) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.role = role;
    }
    return WushuStudent;
}());
var Role;
(function (Role) {
    Role[Role["WHITE_BELT"] = 0] = "WHITE_BELT";
    Role[Role["YELLOW_BELT"] = 1] = "YELLOW_BELT";
    Role[Role["GOLD_BELT"] = 2] = "GOLD_BELT";
    Role[Role["ORANGE_BELT"] = 3] = "ORANGE_BELT";
    Role[Role["GREEN_BELT"] = 4] = "GREEN_BELT";
    Role[Role["BLUE_BELT"] = 5] = "BLUE_BELT";
    Role[Role["PURPLE_BELT"] = 6] = "PURPLE_BELT";
    Role[Role["BROWN_BELT"] = 7] = "BROWN_BELT";
    Role[Role["RED_BELT"] = 8] = "RED_BELT";
    Role[Role["BLACK_BELT"] = 9] = "BLACK_BELT";
})(Role || (Role = {}));
var TexasRanger = new WushuStudent("Jet Li", 59, "Beijing", Role.BLACK_BELT);
function wushuExpertise(student) {
    switch (student.role) {
        case Role.BLACK_BELT:
            console.log("".concat(student.name, " is a 10th degree expert and is eligible to take on students of his/her own."));
            break;
        case Role.RED_BELT:
            console.log("".concat(student.name, " is a 9th degree leader."));
            break;
        case Role.BROWN_BELT:
            console.log("".concat(student.name, " is a 8th degree master."));
            break;
        case Role.PURPLE_BELT:
            console.log("".concat(student.name, " is a 7th degree purple belt."));
            break;
        case Role.BLUE_BELT:
            console.log("".concat(student.name, " is a 6th degree blue belt."));
            break;
        case Role.GREEN_BELT:
            console.log("".concat(student.name, " is a 5h0  degree green belt."));
            break;
        case Role.ORANGE_BELT:
            console.log("".concat(student.name, " is a 4th degree orange belt."));
            break;
        case Role.GOLD_BELT:
            console.log("".concat(student.name, " is a 3rd degree gold belt."));
            break;
        case Role.YELLOW_BELT:
            console.log("".concat(student.name, " is a 2nd degree yellow belt."));
            break;
        case Role.WHITE_BELT:
            console.log("".concat(student.name, " is a 1st degree white belt."));
            break;
        default:
            console.log("".concat(student.name, " aspires to become a Wushu expert."));
            break;
    }
}
console.log("wushu ---");
wushuExpertise(TexasRanger);
