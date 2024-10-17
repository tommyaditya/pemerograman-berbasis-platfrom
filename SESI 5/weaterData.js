const checkCondition = (weather) => {
    let t = weather["temperature"];
    let h = weather["humidity"];
    let w = weather["windspeed"];

    if (t > 20 && t <= 30) {
        if (h > 50) {
            if (w < 15) {
                return 'ideal condition';
            }
        }
    }
    return 'not ideal condition';
};

module.exports = { checkCondition };