import Button from "@restart/ui/esm/Button"

const More = (props) => {

    const pagination = props.pagination
    const loadNextPage = props.loadNextPage
    let thereAreMore = false

    if (pagination) {
        const { offset, count, total } = pagination
        thereAreMore = (offset + count) < total
    }

    return (
        <div className="More">
            {
                thereAreMore &&
                <Button variant="outline-primary" onClick={loadNextPage}>
                    More &raquo;
                </Button>
            }
        </div>
    )

}
export default More
