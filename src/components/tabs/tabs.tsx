import { useState } from "react";

function Tabs({...props}) {

    const [activeTabs, setActiveTabs] = useState(1);
    
    const toggleTabs = (index: number) => {
        setActiveTabs(index)
    }

    return (
        <div className="tabs">
            <div className="tabs__container">
                <div className="tabs__triggers">
                    <a className={activeTabs === 1 ? "tabs__triggers-item tabs__triggers-item--active" : "tabs__triggers-item"} onClick={() => toggleTabs(1)} href="#specifications">Характеристики</a>
                    <a className={activeTabs === 2 ? "tabs__triggers-item tabs__triggers-item--active" : "tabs__triggers-item"} onClick={() => toggleTabs(2)} href="#reviews">Отзывы</a>
                    <a className={activeTabs === 3 ? "tabs__triggers-item tabs__triggers-item--active" : "tabs__triggers-item"} onClick={() => toggleTabs(3)} href="#contacts">Контакты</a>

                </div>
                <div className="tabs__content">
                    <div className={props.activeTabs === 1 ? "tabs__content-item tabs__content-item--active" : "tabs__content-item"} id="specifications">
                    </div>

                    <div className={props.activeTabs === 2 ? "tabs__content-item tabs__content-item--active" : "tabs__content-item"} id="reviews">
                        
                    </div>
                    <div className={props.activeTabs === 3 ? "tabs__content-item tabs__content-item--active" : "tabs__content-item"} id="contacts">
                    </div>

                </div>
            </div>
        </div>

    );
  }
  
  export default Tabs;