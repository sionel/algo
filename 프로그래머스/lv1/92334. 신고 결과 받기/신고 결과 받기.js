const solution = (id_list, reports, k)=> {
  const reporting = []
  const reported = {}
  id_list.forEach(e=>{
      reporting[e] = 0
      reported[e] = new Set()
  })
  while (reports.length) {
      const report = reports.pop()
      const [reporter, target] = report.split(' ')
      reported[target].add(reporter)
  }
  for (const target in reported) {
      const reporters = [...reported[target]];
      if(reporters.length >= k){
          reporters.forEach(reporter=>reporting[reporter]++ )
      } 
  }
  return id_list.map(e=>reporting[e])
}