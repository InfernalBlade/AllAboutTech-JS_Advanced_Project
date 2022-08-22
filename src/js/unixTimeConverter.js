//ho creato questo semplice convertitore da Unix Time a Data leggibile

export function timeConverter(unixTime){
    let x = new Date(unixTime * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = x.getFullYear();
    let month = months[x.getMonth()];
    let date = x.getDate();
    let hour = x.getHours();
    let min = x.getMinutes();
    let sec = x.getSeconds();
    let time = date + ' ' + month + ' ' + year;
    return time;
}