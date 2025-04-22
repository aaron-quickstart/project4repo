




export default function DashBoard()
{



    return (
        <>
        <header>
            <h2>S.S.D.</h2>
            <h4>Storage Systems Discussions</h4>
        </header>
        <nav className='folderBtns'>
            <button className='navBtn'>Home</button>
            <button className='navBtn'>Hardware</button>
            <button className='navBtn'>Cloud Storage</button>
            <button className='navBtn'>Storage Security</button>
        </nav>
        <section className='displayDiv'>
        <h3>Welcome to the community!</h3>
            <h5>Keep things civil.  More rules below</h5>
            <ul>
                <li>Minimize swearing</li>
                <li>Do not start arguments.  Debating and arguing are two different concepts.</li>
                <li>No soliciting</li>
                <li>Hatred will not be tolerated</li>
            </ul>
            <p>Rule Violations will be investigated and handled case by case by a trained representative.  NOT AI.</p>
        </section>
        </>

    )
}