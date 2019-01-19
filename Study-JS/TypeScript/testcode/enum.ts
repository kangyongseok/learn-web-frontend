// 열거형 선언방식

enum PrintMedia1 {
    Newspaper,
    Newsletter,
    Magazine,
    Book
}

enum PrintMedia2 {
    Newspaper = 1,
    Newsletter =  4,
    Magazine = 5,
    Book = 10
}

// 열거형 출력
function getMedia(mediaName: string): PrintMedia2 {
    if(mediaName == 'Fobes' || mediaName === 'Outlook') {
        return PrintMedia2.Magazine;
    }
}

let mediaType: PrintMedia2 = getMedia('Fobes'); // 5

// 숫자 열거형 계산
enum PrintMediaMath {
    Newspaper = 1,
    Newsletter = getPrintMediaCode('newsletter'),
    Magagine = Newsletter * 3,
    Book  = 10
}

function getPrintMediaCode(mediaName: string): number {
    if(mediaName === 'newsletter') {
        return 5;
    }
}

console.log(PrintMediaMath.Newsletter); // 5
console.log(PrintMediaMath.Magagine); // 15

// 문자열 열거형
enum PrintMediaString {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magagine = "MAGAZINE",
    Book = "BOOK"
}

console.log(PrintMediaString.Newspaper); // NEWSPAPER
console.log(PrintMediaString['Magagine']); // MAGAZINE

// 혼합
enum Status {
    Avtive = 'ACTIVE',
    Deactive = 1,
    Pending
}

console.log(Status);