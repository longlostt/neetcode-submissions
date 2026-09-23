class MyCalendar {
    constructor() {
        this.events = [];
    }

    /**
     * @param {number} startTime
     * @param {number} endTime
     * @return {boolean}
     */
    book(startTime, endTIme) {
        for(const [start,end] of this.events){
            if(startTime < end && start < endTIme) return false;
        }
        this.events.push([startTime, endTIme]);
        return true;
    }
}
