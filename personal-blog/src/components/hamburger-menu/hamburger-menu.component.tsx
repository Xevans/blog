


function HamburgerMenu() {

    return (
        <>
            <div className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 18L20 18" stroke="#b0bec5" stroke-width="2" stroke-linecap="round"/>
                    <path d="M4 12L20 12" stroke="#b0bec5" stroke-width="2" stroke-linecap="round"/>
                    <path d="M4 6L20 6" stroke="#b0bec5" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
        </>
    );

};

export default HamburgerMenu