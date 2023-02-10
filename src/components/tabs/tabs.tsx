import { useState } from "react";

import TabsItem from "../../components/tabs-item/tabs-item";

function Tabs() {

    const [activeTabs, setActiveTabs] = useState(1);
    
    const toggleTabs = (index: number) => {
        setActiveTabs(index)
    }

    return (
        <div className="tabs">
            <div className="tabs__container">
                <div className="tabs__triggers">
                    <a className={activeTabs === 1 ? "tabs__triggers-item tabs__triggers-item--active" : "tabs__triggers-item"} onClick={() => toggleTabs(1)} href="#apartment">Квартиры на сутки</a>
                    <a className={activeTabs === 2 ? "tabs__triggers-item tabs__triggers-item--active" : "tabs__triggers-item"} onClick={() => toggleTabs(2)} href="#cottage">Коттеджи и усадьбы</a>
                    <a className={activeTabs === 3 ? "tabs__triggers-item tabs__triggers-item--active" : "tabs__triggers-item"} onClick={() => toggleTabs(3)} href="#bath">Бани и сауны</a>
                    <a className={activeTabs === 4 ? "tabs__triggers-item tabs__triggers-item--active" : "tabs__triggers-item"} onClick={() => toggleTabs(4)} href="#automobile">Авто напрокат</a>
                </div>
                <div className="tabs__content">
                    <div className={activeTabs === 1 ? "tabs__content-item tabs__content-item--active" : "tabs__content-item"} id="apartment">
                        <TabsItem />
                    </div>
                    <div className={activeTabs === 2 ? "tabs__content-item tabs__content-item--active" : "tabs__content-item"} id="cottage">
                        <TabsItem />
                    </div>
                    <div className={activeTabs === 3 ? "tabs__content-item tabs__content-item--active" : "tabs__content-item"} id="bath">
                        <TabsItem />
                    </div>
                    <div className={activeTabs === 4 ? "tabs__content-item tabs__content-item--active" : "tabs__content-item"} id="automobile">
                        <TabsItem />
                    </div>

                </div>
            </div>
        </div>

    );
  }
  
  export default Tabs;