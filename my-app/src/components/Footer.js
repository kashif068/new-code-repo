import React from 'react'

function Footer() {
  return (
    <div class="card bg-primary">
  <div class="card-header text-center">
    This is a footer
  </div>
  <div class="card-body">
    <ul>
    <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
    </li>
    <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">References</a>
    </li>
    </ul>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    <p class="card-text text-center">©CopyRight 2023</p>
  </div>
</div>
  )
}

export default Footer