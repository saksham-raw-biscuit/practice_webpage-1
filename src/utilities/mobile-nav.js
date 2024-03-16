const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelectotr('.mobile-nav');
    
    //state
    let ismobileNavOpen = false;
    console.log(ismobileNavOpen);


    headerBtn.addEventListener('click',() => {
        ismobileNavOpen = !ismobileNavOpen;
        mobileNav.style.display = 'flex';
        document.body.style.overflowY = "hidden"; 
        console.log(ismobileNavOpen);
    });
};
export default mobileNav;