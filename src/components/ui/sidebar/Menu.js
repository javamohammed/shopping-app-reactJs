import React from 'react'
import MenuItem from "./MenuItem";
export default function Menu(props) {
    return (
        <div className="sidebar-scrollbar">
            <ul className="nav sidebar-inner" id="sidebar-menu">
                <MenuItem>
                    <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#dashboard"
                    aria-expanded="false" aria-controls="dashboard">
                    <i className="mdi mdi-view-dashboard-outline"></i>
                    <span className="nav-text">Dashboard</span> <b className="caret"></b>
                    </a>
                    <ul  className="collapse show"  id="dashboard" data-parent="#sidebar-menu">
                        <div className="sub-menu">
                            <li  className="active" >
                                <a className="sidenav-item-link" href="index.html">
                                <span className="nav-text">Ecommerce</span>
                                
                                </a>
                            </li>
                            <li >
                                <a className="sidenav-item-link" href="analytics.html">
                                <span className="nav-text">Analytics</span>
                                
                                <span className="badge badge-success">new</span>   
                                </a>
                            </li>
                        </div>
                    </ul>
                </MenuItem>
                <MenuItem>
                    <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#pages"
                    aria-expanded="false" aria-controls="pages">
                    <i className="mdi mdi-image-filter-none"></i>
                    <span className="nav-text">Pages</span> <b className="caret"></b>
                    </a>
                    <ul  className="collapse"  id="pages"
                      data-parent="#sidebar-menu">
                      <div className="sub-menu">
                            <li >
                              <a className="sidenav-item-link" href="user-profile.html">
                                <span className="nav-text">User Profile</span>
                                
                              </a>
                            </li>
                        <li  className="has-sub" >
                          <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#authentication"
                            aria-expanded="false" aria-controls="authentication">
                            <span className="nav-text">Authentication</span> <b className="caret"></b>
                          </a>
                          <ul  className="collapse"  id="authentication">
                            <div className="sub-menu">
                              
                              <li >
                                <a href="sign-in.html">Sign In</a>
                              </li>
                              
                              <li >
                                <a href="sign-up.html">Sign Up</a>
                              </li>
                              
                            </div>
                          </ul>
                        </li>
                        <li  className="has-sub" >
                          <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#others"
                            aria-expanded="false" aria-controls="others">
                            <span className="nav-text">Others</span> <b className="caret"></b>
                          </a>
                          <ul  className="collapse"  id="others">
                            <div className="sub-menu">
                              
                              <li >
                                <a href="invoice.html">invoice</a>
                              </li>
                              
                              <li >
                                <a href="error.html">Error</a>
                              </li>
                              
                            </div>
                          </ul>
                        </li> 
                      </div>
                    </ul>
                </MenuItem>
                
                <MenuItem>
                    <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#documentation"
                    aria-expanded="false" aria-controls="documentation">
                    <i className="mdi mdi-book-open-page-variant"></i>
                    <span className="nav-text">Documentation</span> <b className="caret"></b>
                    </a>
                    <ul  className="collapse"  id="documentation"
                      data-parent="#sidebar-menu">
                      <div className="sub-menu">                      
                            <li className="section-title">
                              Layouts
                            </li>
                            <li  className="has-sub" >
                          <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#sidebar-navs"
                            aria-expanded="false" aria-controls="sidebar-navs">
                            <span className="nav-text">layout Sidebars</span> <b className="caret"></b>
                          </a>
                          <ul  className="collapse"  id="sidebar-navs">
                            <div className="sub-menu">
                              <li >
                                <a href="sidebar-open.html">Sidebar Open</a>
                              </li>
                              
                              <li >
                                <a href="sidebar-minimized.html">Sidebar Minimized</a>
                              </li>
                            </div>
                          </ul>
                        </li> 
                      </div>
                    </ul>
                </MenuItem>
            </ul>
        </div>
    )
}
