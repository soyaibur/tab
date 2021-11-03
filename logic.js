const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll(".jakala");

tabs.forEach(function tab(tab){
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('active');
        });
        target.classList.add('active');
        console.log(target.classList);

    });
});