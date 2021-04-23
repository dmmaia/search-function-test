function search(data, searchTerms){
  let searchTermsList = searchTerms.split(' ').filter((word=>{
    return word.length>2
  }))

  let foundItems = []
  let lastCount = 0

  data.map((item=>{
    let count = 0
    searchTermsList.map(term=>{
      count = item.includes(term)?count+1:count
    })
    if(count>0){
      if(count>lastCount){
        foundItems.unshift(item)
      }else{
        foundItems.push(item)
      }
      lastCount = count
    }
  }))

  return foundItems
}