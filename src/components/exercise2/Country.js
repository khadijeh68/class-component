import { Component } from "react";
class Country extends Component {
  state = {
    countries: [
      { id: 1, country: "iran", capital: "tehran" },
      { id: 2, country: "germany", capital: "berlin" },
      { id: 3, country: "england", capital: "london" },
      { id: 4, country: "italy", capital: "rome" },
      { id: 5, country: "japan", capital: "tokyo" },
      { id: 6, country: "qatar", capital: "doha" },
      { id: 7, country: "russia", capital: "moscow" },
      { id: 8, country: "spain", capital: "madrid" },
      { id: 9, country: "turkey", capital: "ankara" },
      { id: 10, country: "france", capital: "paris" },
    ],
  };
  render() {
    return (
      // <main className="d-flex justify-content-center m-5">
      //   <table className="table table-hover table-dark w-50">
      //     <thead>
      //       <tr>
      //         <th>Id</th>
      //         <th>Country</th>
      //         <th>Capital</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {this.state.countries.map(({ id, country, capital }) => (
      //         <tr className="item" key={id}>
      //           <td>{id}</td>
      //           <td>{country}</td>
      //           <td>{capital}</td>
      //         </tr>
      //       ))}
      //     </tbody>
      //   </table>
      <main className=" d-flex flex-wrap justify-content-center align-items-center mt-4">
        {this.state.countries.map(({ id, country, capital }) => (
          <div class="card m-3 p-2 col-sm-6 col-md-2 border-dark" key={id}>
            <div class="card-body">
              <h6 class="card-title text-danger">{`Country: ${country}`}</h6>
              <p class="card-text text-primary">{`Capital: ${capital}`}</p>
            </div>
          </div>
        ))}
      </main>
    );
  }
}

export default Country;
