/**
Given an array of meeting time intervals consisting of start and end times [
[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

For example,
Given [[0, 30],[5, 10],[15, 20]],

return false.
*/

const { Interval, canAttendMeetings } = require('./index');

describe('252. Meeting Rooms', () => {
  it('should allow a person to attend all meetings', () => {
    const intervals = [];
    intervals.push(new Interval(0, 5));
    intervals.push(new Interval(5, 10));

    const result = canAttendMeetings(intervals);
    expect(result).toBe(true);
  });

  it('should allow a person to attend all meetings', () => {
    const intervals = [];
    intervals.push(new Interval(0, 5));

    const result = canAttendMeetings(intervals);
    expect(result).toBe(true);
  });

  it('should allow a person to attend all meetings', () => {
    const intervals = [];

    const result = canAttendMeetings(intervals);
    expect(result).toBe(true);
  });

  it('should not allow a person to attend all meetings', () => {
    const intervals = [];
    intervals.push(new Interval(0, 30));
    intervals.push(new Interval(5, 10));
    intervals.push(new Interval(15, 20));

    const result = canAttendMeetings(intervals);
    expect(result).toBe(false);
  });
});
