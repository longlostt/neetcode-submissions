class MyCalendar {
    constructor() {
        this.events = [];
    }

    /**
     * @param {number} startTime
     * @param {number} endTime
     * @return {boolean}
     */
    bsearch(value) {
        // @return {number} startTime value
        let l = 0;
        let r = this.events.length - 1;
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            if (this.events[m][0] < value) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return l;
    }

    book(startTime, endTime) {
        this.events.sort((a, b) => a[0] - b[0]);
        let idx = this.bsearch(startTime);
        let right = this.events[idx];
        let left = this.events[idx - 1];

        if(left && left[1] > startTime) return false;
        if(right && right[0] < endTime) return false;

        this.events.splice(right, 0, [startTime, endTime]);
        return true;
        
    }
}
