import React, {Component} from "react";
import Like from "./common/like";
import Table from "./common/Table";

class MoviesTable extends Component {
    columns = [
        {path: "title", label: "Title"},
        {path: "genre.name", label: "Genre"},
        {path: "numberInStock", label: "Stock"},
        {path: "dailyRentalRate", label: "Rate"},
        {key: "like", content: movie => (<Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>)},
        {
            key: "delete", content: movie => (<button
                className="btn btn-danger btn-sm"
                onClick={() => this.props.onDelete(movie)}
            >
                Delete
            </button>)
        },
    ];

    render() {
        const {movies, onSort, sortColumn} = this.props;

        return (
            <Table columns={this.columns} onSort={onSort} data={movies} sortColumn={sortColumn}/>
        );
    }
}

export default MoviesTable;
