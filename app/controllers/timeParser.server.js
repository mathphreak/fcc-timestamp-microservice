'use strict';

function TimeParser () {
    
    this.parseDate = function (req, res) {
        var rawData = req.params.date;
        var date = new Date(0);
        
        if (rawData == +rawData) {
            date.setTime(+rawData * 1000);
        } else {
            var pieces = /(\w+) (\d+), (\d+)/.exec(rawData);
            var monthName = pieces[1], day = +pieces[2], year = +pieces[3];
            
            // Months are hard or something.
            date.setUTCFullYear(year, 0, day);
            while (!monthName.startsWith(date.toLocaleDateString('en-US', {month: 'long'}))) {
                date.setMonth(date.getMonth() + 1);
            }
        }
        
        res.json({unix: date.getTime() / 1000, natural: date.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})});
    };

}

module.exports = TimeParser;