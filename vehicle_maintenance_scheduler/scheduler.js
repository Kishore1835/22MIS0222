function optimizeTasks(tasks, hours) {

    tasks.sort((a, b) => {
        return (b.Impact / b.Duration) - (a.Impact / a.Duration);
    });

    let selected = [];
    let totalHours = 0;
    let totalImpact = 0;

    for (let task of tasks) {

        if (totalHours + task.Duration <= hours) {

            selected.push(task);

            totalHours += task.Duration;

            totalImpact += task.Impact;
        }
    }

    return {
        selected,
        totalHours,
        totalImpact
    };
}

module.exports = optimizeTasks;
