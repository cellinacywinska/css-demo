export default function PatientDashboard() {
    return (
        <div className="sidebar-wrapper">
            <div className="sidebar">
                <div className="portal-title-wrapper">
                    <img src="images/account-icon.jpg" alt="Logo" className="account-icon"></img>
                    <h2 className="portal-title">Patient Portal</h2>
                </div>
                <hr />
                <ul className="sidebar-list">
                    <div className="portal-icons-wrapper">
                        <div className="icon-title">
                            <img src="images/questionnaire-icon.png" alt="Logo" className="questionnaire-icon"></img>
                            <li className="icon-title">Awaiting questionnaires</li>
                        </div>

                        <div className="icon-title">
                            <img src="images/myquestionnaires-icon.png" alt="Logo" className="myquestionnaires-icon"></img>
                            <li className="icon-title">My questionnaires</li>
                        </div>

                        <div className="icon-title">
                            <img src="images/book-appointment-icon.png" alt="Logo" className="book-appointment-icon"></img>
                            <li className="icon-title">Book an appointment</li>
                        </div>

                        <div className="icon-title">
                            <img src="images/myaccount-icon.png" alt="Logo" className="myaccount-icon"></img>
                            <li className="icon-title">My account</li>
                        </div>
                    </div>
                </ul>
                <div className="log-out-wrapper">
                    <div className="center">
                        <img src="images/log-out-icon.png" alt="Logo" className="log-out-icon"></img>
                        <h2 className="log-out-text">Log out</h2>
                    </div>
                    <div className="footer-sidebar">
                        <div >
                            <p>Contact</p>
                        </div>
                        <div >
                            <p>Privacy</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="dashboard-title">
                <div className="header-dashboard">
                    Dashboard
                </div>

                {/* <div className="placeholder-container">
                </div> */}

            </div>
        </div>
    )
}