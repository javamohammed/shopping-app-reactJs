import React from 'react'

export default function MenuFooter() {
    return (
        <div className="sidebar-footer">
              <div className="sidebar-footer-content">
                <h6 className="text-uppercase">
                  Cpu Uses <span className="float-right">40%</span>
                </h6>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar active"
                    style={{width:'40%'}}
                    role="progressbar"
                  ></div>
                </div>
                <h6 className="text-uppercase">
                  Memory Uses <span className="float-right">65%</span>
                </h6>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar progress-bar-warning"
                    style={{width:'65%'}}
                    role="progressbar"
                  ></div>
                </div>
              </div>
        </div>
    )
}
