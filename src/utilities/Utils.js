class Utils {

    static getRandomPos(max, count) {
      var result = [];

      while(result.length < count) {
        var value =  Math.floor(Math.random() * max);
        if(!result.includes(value)) {
          result.push(value);
        }
      }

      return result;
    }
  
    static addHoursAndMinute(dateCopy, hours, minutes) {
      const dateResult = new Date(dateCopy.getTime());

      dateResult.setMinutes(dateResult.getMinutes() + minutes);
      dateResult.setHours(dateResult.getHours() + hours);

      return dateResult;
    }

    static updateHoursAndMinute(dateCopy, hours, minutes) {
      const dateResult = new Date(dateCopy.getTime());

      dateResult.setMinutes(minutes);
      dateResult.setHours(hours);

      return dateResult;
    }

    static isSameDay(sleepDate, wakeDate) {
      if(sleepDate.getDay() === wakeDate.getDay()) {
          return true;
      }

      return false;
    }

    static pad(n) {
      return n < 10 ? '0' + n : n;
    }
  
    static displayTime(date) {
        return this.pad(date.getHours()) + ':' + this.pad(date.getMinutes());
    }
  }
  
  export default Utils;