import React, { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";

function Post() {
  const pageSize = 10;
  const [posts, setpost] = useState(post);
  const [paginatedPosts, setpaginatedPost] = useState();
  const [currentPage, setcurrentPage] = useState(1);
  const eye = <img src='../../IMAGES/eye.svg' />
  const tdot = <img src='../../IMAGES/3dot.svg' style={{ height: "22px", width: "5px" }} />
  const chkbox = <input type="checkbox" />
  const post = [
    {
      checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
      reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
      paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Pending', dot: tdot
    },
    {
      checkBox: chkbox, invoice: 'Normal', date: 'June 1, 2020,05:34: AM',
      reciep: { imgpath: 'picsvg.svg', name: 'David Oconner' }, amt: '$783.22',
      paymentMethod: { name: 'UPI' }, setamt: '$783.22', status: 'Complete', dot: tdot
    },

  ]
  setpaginatedPost(_(post).slice(0).take(pageSize).value());

  

  const pageCount = posts ? Math.ceil(posts.length / pageSize) : 0;

  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    setcurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPosts = _(posts).slice(startIndex).take(pageSize).value();
    setpaginatedPost(paginatedPosts);
  };

  return (
    <>
      {!paginatedPosts ? (
        "No Data Found"
      ) : (
        <table className="table container mt-5">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">User Id</th>
              <th scope="col">Title</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedPosts.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.userId}</td>
                  <td>{item.title}</td>
                  <td>
                    <p
                      className={
                        item.completed ? "btn btn-info" : "btn btn-danger"
                      }
                    >
                      {item.completed ? "Completed" : "Panding"}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {pages.map((page, index) => {
            return (
              <>
                <li
                  className={
                    page === currentPage ? "page-item active" : "page-item"
                  }
                >
                  <p className="page-link" onClick={() => pagination(page)}>
                    {page}
                  </p>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Post;
