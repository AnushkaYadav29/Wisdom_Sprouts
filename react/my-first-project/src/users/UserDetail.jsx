import React, { useEffect, useState } from "react";
import PageNotFound from "./PageNotFound";
import Loading from "./Loading";

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // For Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // FetchData
  async function getUsersData() {
    try {
      const res = await fetch("https://randomuser.me/api/?results=30");
      console.log(res);
      if (!res.ok) {
        setError(true);
        setLoading(false);
      }
      const data = await res.json();
      setUsers(data.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsersData();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirst = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirst, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  if (loading) return <Loading />;
  if (error) return <PageNotFound />;

  return (
    <>
      <div>UserDetails</div>
      <table className="table table-warning table-striped">
        <thead>
          <tr className="table-warning">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          
          {currentUsers.map((U, i) => (
            <tr className="table-warning" key={i}>
              <th scope="row">{indexOfFirst + i + 1}</th>
              <td>
                <img
                  className="rounded-circle"
                  src={U.picture.medium}
                  alt="not shown"
                />
                <b>
                  {U.name.title} {U.name.first} {U.name.last}
                </b>
              </td>
              <td>
               <p><b>{U.location.city}</b></p> 
               <p><b>{U.location.state}</b></p> 
                <p>{U.location.postcode}</p>
              </td>
              <td>{U.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          prev
        </button>

        {
        pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            style={{
              margin: "5px",
              backgroundColor: currentPage === num ? "black" : "lightgray",
              color: currentPage === num ? "white" : "black",
            }}
          >
            {num}
          </button>
        ))
        }

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default UserDetails;