function Interval(start, end) {
  this.start = start;
  this.end = end;
}

const canAttendMeetings = intervals => {
  // sort the intervals by their start time
  intervals.sort((x, y) => x.start - y.start);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start < intervals[i - 1].end) return false;
  }

  return true;
};

module.exports = {
  Interval,
  canAttendMeetings
};
