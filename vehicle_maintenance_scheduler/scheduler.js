function optimizeTasks(task,hours){
  tasks.sort((a,b)=>{
    return(b.Impact / b.Duration) - (a.Impact / a.Duration);
  });
  let selected = [];
  let totalhours = 0;
  let totalimpact =0;
  for(let task of tasks){
    if(totalhours+ task.Duration <=hours){
      selected.push(task);
      totalhours += task.Duration;
      totalimpact += task.Impact;}
  }
  return{
    selected,
    totalhours,
    totalimpact};
}
module.exports = optimizeTasks;

