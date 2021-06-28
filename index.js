const refs = {
    daysValue: document.querySelector('[data-value="days"]'),
    hoursValue: document.querySelector('[data-value="hours"]'),
    minsValue: document.querySelector('[data-value="mins"]'),
    secsValue: document.querySelector('[data-value="secs"]')    
}

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.start();
    }

    start() {
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const time = this.getTimeComponents(deltaTime);
            this.updateClockface(time)
        }, 1000);
    }

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    }

    updateClockface({days, hours, mins, secs }) {
        refs.daysValue.textContent = `${days}`;
        refs.hoursValue.textContent = `${hours}`;
        refs.minsValue.textContent = `${mins}`;
        refs.secsValue.textContent = `${secs}`
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 23, 2021'),
});