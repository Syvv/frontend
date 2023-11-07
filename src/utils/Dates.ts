export function timePassed(date1: Date, date2: Date): TimePassed {
    const timePassed = {
        years: 0,
        months: 0,
        days: 0,
    }
    let difference = Math.abs(date1.getTime() - date2.getTime());
    while(difference > 86400000) {
        if(difference > 31556952000) {
            difference - 31556952000;
            timePassed.years++;
        } else if(difference > 2629800000) {
            difference - 2629800000;
            timePassed.months++;
        } else {
            difference - 86400000;
            timePassed.days++;
        }
    }
    return timePassed;
}

export type TimePassed = {
    years: number; months: number; days: number;
}