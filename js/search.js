//wire up filter search box
(function(){

    const searchBox = document.querySelector('#search-item')
    const storeItems = document.querySelectorAll('.store-item')
  
    searchBox.addEventListener('keyup', (e) => {
    
        const searchFilter = e.target.value.trim()
        //display only items that contain filter input
  
        storeItems.forEach((item) => {
            if (item.textContent.includes(searchFilter)){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    })
  
  })();