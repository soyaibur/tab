const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('.jakala');


//Setting switch to every tab element.
tabs.forEach(tab=>{
 tab.addEventListener('click',()=>{
     const target = document.querySelector(tab.dataset.tabTarget);

    
     //removing active class from all div
     tabContents.forEach(con=>{
         con.classList.remove('active');
     });
    //removing active class from all tab
    tabs.forEach(tab=>{
        tab.classList.remove('active');
    })




    // Adding active class only to the clicked tab
     tab.classList.add('active');
     target.classList.add('active');
     
 })
});