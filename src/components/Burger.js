
export default function Burger({open, handleOpenClose}){

    return(
        <div className="section">
        <div className={open ? 'container change' : 'container'} onClick={handleOpenClose}>
          <div className="hamburger">
            <a href="#">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </a>
          </div>
        </div>
      </div>
    )
}