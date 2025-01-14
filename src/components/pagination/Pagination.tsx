import {useSearchParams} from "react-router-dom";


const Pagination = () => {
    const [query, setQuery] = useSearchParams({skip:'0'});
    const skip = query.get('skip');
    const pageUp = () => {

        if (skip) {
            const currentPage = +skip;
            const nextPage = currentPage + 30
            setQuery({skip: nextPage.toString()})
        }
    }

    const pageDown = () => {
        if (skip) {
            const currentPage = +skip;
            const nextPage = currentPage - 30
            setQuery({skip: nextPage.toString()})
        }
    }

    return (
        <div>
            <button onClick={pageDown} disabled={skip==0}>prev</button>
            <button onClick={pageUp}>next</button>
        </div>
    );
};

export default Pagination;