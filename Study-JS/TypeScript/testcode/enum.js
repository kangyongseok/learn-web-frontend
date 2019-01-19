// 열거형 선언방식
var PrintMedia1;
(function (PrintMedia1) {
    PrintMedia1[PrintMedia1["Newspaper"] = 0] = "Newspaper";
    PrintMedia1[PrintMedia1["Newsletter"] = 1] = "Newsletter";
    PrintMedia1[PrintMedia1["Magazine"] = 2] = "Magazine";
    PrintMedia1[PrintMedia1["Book"] = 3] = "Book";
})(PrintMedia1 || (PrintMedia1 = {}));
var PrintMedia2;
(function (PrintMedia2) {
    PrintMedia2[PrintMedia2["Newspaper"] = 1] = "Newspaper";
    PrintMedia2[PrintMedia2["Newsletter"] = 4] = "Newsletter";
    PrintMedia2[PrintMedia2["Magazine"] = 5] = "Magazine";
    PrintMedia2[PrintMedia2["Book"] = 10] = "Book";
})(PrintMedia2 || (PrintMedia2 = {}));
// 열거형 출력
function getMedia(mediaName) {
    if (mediaName == 'Fobes' || mediaName === 'Outlook') {
        return PrintMedia2.Magazine;
    }
}
var mediaType = getMedia('Fobes'); // 5
// 숫자 열거형 계산
var PrintMediaMath;
(function (PrintMediaMath) {
    PrintMediaMath[PrintMediaMath["Newspaper"] = 1] = "Newspaper";
    PrintMediaMath[PrintMediaMath["Newsletter"] = getPrintMediaCode('newsletter')] = "Newsletter";
    PrintMediaMath[PrintMediaMath["Magagine"] = PrintMediaMath.Newsletter * 3] = "Magagine";
    PrintMediaMath[PrintMediaMath["Book"] = 10] = "Book";
})(PrintMediaMath || (PrintMediaMath = {}));
function getPrintMediaCode(mediaName) {
    if (mediaName === 'newsletter') {
        return 5;
    }
}
console.log(PrintMediaMath.Newsletter); // 5
console.log(PrintMediaMath.Magagine); // 15
// 문자열 열거형
var PrintMediaString;
(function (PrintMediaString) {
    PrintMediaString["Newspaper"] = "NEWSPAPER";
    PrintMediaString["Newsletter"] = "NEWSLETTER";
    PrintMediaString["Magagine"] = "MAGAZINE";
    PrintMediaString["Book"] = "BOOK";
})(PrintMediaString || (PrintMediaString = {}));
console.log(PrintMediaString.Newspaper); // NEWSPAPER
console.log(PrintMediaString['Magagine']); // MAGAZINE
// 혼합
var Status;
(function (Status) {
    Status["Avtive"] = "ACTIVE";
    Status[Status["Deactive"] = 1] = "Deactive";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
console.log(Status);
