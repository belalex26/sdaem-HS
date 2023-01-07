function Pagination() {
    return (
        <ul className="psgination">
            <li className="pagination__item">
                <a className="pagination__item-link pagination__item-link--active" href="#">1</a>
            </li>
            <li className="pagination__item">
                <a className="pagination__item-link">2</a>
            </li>
            <li className="pagination__item">
                <a className="pagination__item-link">3</a>
            </li>
            <li className="pagination__item">
                <a className="pagination__item-link">4</a>
            </li>
            <li className="pagination__item">
                <a className="pagination__item-link">5</a>
            </li>
            <li className="pagination__item">
                <a className="pagination__item-link">6</a>
            </li>
            <li className="pagination__item">
                <a className="pagination__item-link">7</a>
            </li>
            <li className="pagination__item">...</li>
            <li className="pagination__item">11</li>
        </ul>
    );
  }
  
  export default Pagination;