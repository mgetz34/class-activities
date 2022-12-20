// TODO: Complete the 'counter' function below.
function counter() {
    var count = 0;

    return {
        increment: function () {
            count++;
            return count;
        }
    }
}
    module.exports = counter;
