import Table from "react-bootstrap/Table";
import { useState } from "react";

export default function LeftDiv() {
  var [loadSecondTable, setloadSecondTable] = useState(false);
  loadSecondTable= UserData();


  return (
    <div>
      <form className="col-6 form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="search"
          aria-label="search"
        />
      </form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Todo ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Meeting at 8</td>
            <td>Complete</td>
            <td>
              {loadSecondTable && UserData}
              <button onClick={() => setloadSecondTable(!loadSecondTable)}>
                View{" "}
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <button>View </button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>
              <button>View </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );

function UserData() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Aniket</td>
              <td>Abhishek</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
  
}
